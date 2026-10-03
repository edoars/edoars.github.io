// Talk photos open in an overlay; a click or Esc closes it.
const box = document.querySelector(".lightbox");
const caption = box.querySelector("figcaption");
// Created here because an <img> without a src is invalid HTML.
const big = document.createElement("img");
big.alt = "";
caption.before(big);
for (const a of document.querySelectorAll(".talk__zoom")) {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    big.src = a.href;
    caption.textContent = a.dataset.caption;
    box.showModal();
  });
}
box.addEventListener("click", () => box.close());
