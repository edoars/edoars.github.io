const still = matchMedia("(prefers-reduced-motion: reduce)");

// The rest of the bio rolls out under the short one, and back, from wherever it is.
const toggle = document.querySelector(".intro__toggle");
if (toggle) {
  const more = document.getElementById("bio-more");
  let fold;
  const unfold = (open) => {
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "less about me" : "more about me";
    const from = more.hidden ? 0 : more.offsetHeight;
    fold?.cancel();
    more.hidden = false;
    const full = more.offsetHeight;
    const to = open ? full : 0;
    fold = more.animate(
      { height: [`${from}px`, `${to}px`], opacity: [from / full, to / full] },
      {
        duration: still.matches ? 0 : 450,
        easing: "cubic-bezier(0.2, 0.7, 0.3, 1)",
      },
    );
    fold.onfinish = () => (more.hidden = !open);
  };
  toggle.addEventListener("click", () =>
    unfold(toggle.getAttribute("aria-expanded") !== "true"),
  );
}
