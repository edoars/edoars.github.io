// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications grouped by year",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Selected talks and seminars",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-key",
          title: "Key",
          description: "GPG public key",
          section: "Navigation",
          handler: () => {
            window.location.href = "/key/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "Some random notes",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "news-our-paper-history-free-sequential-aggregation-of-hash-and-sign-signatures-with-alessio-meneghetti-was-accepted-at-ct-rsa-2024",
          title: 'Our paper, History-Free Sequential Aggregation of Hash-and-Sign Signatures with Alessio Meneghetti, was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-group-factorisation-for-smaller-signatures-from-cryptographic-group-actions-with-giuseppe-d-alconzo-and-alessio-meneghetti-was-accepted-at-cbcrypto-2024-and-wcc-2024",
          title: 'Our paper, Group Factorisation for Smaller Signatures from Cryptographic Group Actions with Giuseppe...',
          description: "",
          section: "News",},{id: "news-i-m-giving-a-talk-at-the-rsa-conference-2024-in-san-francisco-on-may-6th",
          title: 'I’m giving a talk at the RSA Conference 2024 in San Francisco on...',
          description: "",
          section: "News",},{id: "news-i-m-giving-a-talk-at-the-cryptography-days-conference-in-turin-on-may-17th",
          title: 'I’m giving a talk at the CrypTOgraphy Days conference in Turin on May...',
          description: "",
          section: "News",},{id: "news-new-paper-available-on-eprint-security-of-fixed-weight-repetitions-of-special-sound-multi-round-proofs-with-michele-battagliola-riccardo-longo-federico-pintore-and-giovanni-tognolini",
          title: 'New paper available on ePrint: Security of Fixed-Weight Repetitions of Special-Sound Multi-Round Proofs...',
          description: "",
          section: "News",},{id: "news-new-paper-available-on-eprint-group-factorisation-for-smaller-signatures-from-cryptographic-group-actions-with-giuseppe-d-alconzo-and-alessio-meneghetti",
          title: 'New paper available on ePrint: Group Factorisation for Smaller Signatures from Cryptographic Group...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis",
          title: 'I successfully defended my PhD thesis 🎉',
          description: "",
          section: "News",},{id: "news-new-paper-available-on-eprint-a-framework-for-group-action-based-multi-signatures-and-applications-to-less-meds-and-alteq-with-giuseppe-d-alconzo-andrea-flamini-and-alessio-meneghetti",
          title: 'New paper available on ePrint: A Framework for Group Action-Based Multi-Signatures and Applications...',
          description: "",
          section: "News",},{id: "news-new-paper-available-on-eprint-a-revision-of-cross-security-proofs-and-attacks-for-multi-round-fiat-shamir-signatures-with-michele-battagliola-riccardo-longo-federico-pintore-and-giovanni-tognolini",
          title: 'New paper available on ePrint: A Revision of CROSS Security: Proofs and Attacks...',
          description: "",
          section: "News",},{id: "news-our-paper-a-framework-for-group-action-based-multi-signatures-and-applications-to-less-meds-and-alteq-with-giuseppe-d-alconzo-andrea-flamini-and-alessio-meneghetti-was-accepted-at-pkc-2025",
          title: 'Our paper, A Framework for Group Action-Based Multi-Signatures and Applications to LESS, MEDS,...',
          description: "",
          section: "News",},{id: "news-i-m-giving-a-talk-at-pkc-2025-in-røros-on-may-12th",
          title: 'I’m giving a talk at PKC 2025 in Røros on May 12th.',
          description: "",
          section: "News",},{id: "news-i-m-giving-a-talk-at-the-crypto-conference-in-turin-on-may-23rd",
          title: 'I’m giving a talk at the CrypTO Conference in Turin on May 23rd....',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%69%6C@%65%64%6F%61%72%73.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/edoars", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/edoardo-signorini", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1224-6732", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WpvGgz8AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/edoars", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
