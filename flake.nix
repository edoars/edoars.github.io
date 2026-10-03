{
  description = "edoars.me";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    systems = [
      "x86_64-linux"
      "aarch64-linux"
      "aarch64-darwin"
    ];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
  in {
    packages = forAllSystems (pkgs: {
      default = pkgs.stdenvNoCC.mkDerivation {
        name = "edoars.me";
        src = pkgs.lib.fileset.toSource {
          root = ./.;
          fileset = pkgs.lib.fileset.unions [
            ./config.toml
            ./content
            ./data
            ./sass
            ./static
            ./templates
          ];
        };
        nativeBuildInputs = [pkgs.zola];
        # load_data builds an HTTP client even for local files, and it panics without CA certs.
        SSL_CERT_FILE = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
        # The footer prints the store path the site is built into.
        buildPhase = "SITE_STORE_PATH=$out zola build --output-dir $out";
        dontInstall = true;
        dontFixup = true;
      };
    });

    apps = forAllSystems (pkgs: {
      default = {
        type = "app";
        program = pkgs.lib.getExe (
          pkgs.writeShellApplication {
            name = "serve";
            runtimeInputs = [pkgs.zola];
            text = ''zola serve "$@"'';
          }
        );
        meta.description = "Serve the site locally with live reload";
      };
    });

    devShells = forAllSystems (pkgs: {
      default = pkgs.mkShell {packages = [pkgs.zola];};
    });

    checks = forAllSystems (pkgs: {
      build = self.packages.${pkgs.stdenv.hostPlatform.system}.default;
      formatting = self.formatter.${pkgs.stdenv.hostPlatform.system}.check self;
    });

    formatter = forAllSystems (
      pkgs:
        pkgs.treefmt.withConfig {
          runtimeInputs = [
            pkgs.alejandra
            pkgs.prettier
            pkgs.taplo
          ];
          settings = {
            on-unmatched = "info";
            tree-root-file = "flake.nix";
            formatter = {
              alejandra = {
                command = "alejandra";
                includes = ["*.nix"];
              };

              # No *.html: prettier doesn't understand Tera and mangles the templates.
              prettier = {
                command = "prettier";
                options = ["--write"];
                includes = [
                  "*.js"
                  "*.md"
                  "*.scss"
                  "*.yml"
                ];
              };

              taplo = {
                command = "taplo";
                options = ["format"];
                includes = ["*.toml"];
              };
            };
          };
        }
    );
  };
}
