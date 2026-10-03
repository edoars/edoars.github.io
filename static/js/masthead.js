// Theme toggle: light by default, a dark choice is remembered.
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
toggle.setAttribute("aria-pressed", root.dataset.theme === "dark");
toggle.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  if (dark) root.dataset.theme = "dark";
  else delete root.dataset.theme;
  try {
    if (dark) localStorage.setItem("theme", "dark");
    else localStorage.removeItem("theme");
  } catch {}
  toggle.setAttribute("aria-pressed", dark);
});
