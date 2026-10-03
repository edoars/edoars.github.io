// OpenSSH randomart: a drunken bishop walks the digest, two bits per diagonal step.
const portrait = document.querySelector(".portrait");
const art = portrait.querySelector(".randomart");
const chars = " .o+=*BOX@%&#/^";
const [W, H] = [17, 9];
const still = matchMedia("(prefers-reduced-motion: reduce)");
let frame = 0;

const clamp = (v, max) => Math.min(max, Math.max(0, v));

function walk(digest) {
  let [x, y] = [W >> 1, H >> 1];
  const path = [[x, y]];
  for (const byte of digest) {
    for (let t = 0; t < 4; t++) {
      const step = (byte >> (2 * t)) & 3;
      x = clamp(x + (step & 1 ? 1 : -1), W - 1);
      y = clamp(y + (step & 2 ? 1 : -1), H - 1);
      path.push([x, y]);
    }
  }
  return path;
}

function play(digest) {
  const path = walk(digest);
  const moves = path.length - 1;
  const cells = [];
  const rule = `+${"-".repeat(W)}+`;
  art.replaceChildren(rule + "\n");
  for (let y = 0; y < H; y++) {
    const row = Array.from({ length: W }, () => {
      const cell = document.createElement("span");
      cell.textContent = " ";
      return cell;
    });
    cells.push(...row);
    art.append("|", ...row, "|\n");
  }
  art.append(rule);
  const [x0, y0] = path[0];
  const start = cells[x0 + W * y0];
  start.textContent = "S";
  start.className = "randomart__end";

  // Each visited cell flashes in the accent, leaving a fading trail.
  const accent = getComputedStyle(art).getPropertyValue("--accent");
  const counts = new Array(W * H).fill(0);
  let head = start;
  let shown = 0;
  const show = (i) => {
    for (; shown < i; shown++) {
      const [x, y] = path[shown + 1];
      const k = x + W * y;
      const cell = cells[k];
      counts[k]++;
      if (cell !== start)
        cell.textContent = chars[Math.min(counts[k], chars.length - 1)];
      if (!still.matches)
        cell.animate([{ color: accent }, {}], {
          duration: 700,
          easing: "ease-out",
        });
    }
    head.classList.remove("randomart__head");
    const [x, y] = path[i];
    head = cells[x + W * y];
    if (i < moves) {
      head.classList.add("randomart__head");
    } else {
      head.textContent = "E";
      head.className = "randomart__end";
    }
  };

  cancelAnimationFrame(frame);
  if (still.matches) return show(moves);
  let t0;
  const tick = (now) => {
    t0 ??= now;
    const i = Math.min(moves, Math.floor((now - t0) / 30));
    show(i);
    if (i < moves) frame = requestAnimationFrame(tick);
  };
  show(0);
  frame = requestAnimationFrame(tick);
}

// sha256("<name> <YYYY-MM-DD>") in the visitor's local date: a new board every day.
async function todaysDigest() {
  const d = new Date();
  const today = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    .map((n) => String(n).padStart(2, "0"))
    .join("-");
  const text = new TextEncoder().encode(`${portrait.dataset.name} ${today}`);
  return new Uint8Array(await crypto.subtle.digest("SHA-256", text));
}

// Each hover replays the walk; leaving fades back to the photo.
let over = false;
portrait.addEventListener("mouseenter", async () => {
  over = true;
  const bytes = await todaysDigest();
  if (!over) return;
  play(bytes);
  portrait.classList.add("is-walking");
});
portrait.addEventListener("mouseleave", () => {
  over = false;
  portrait.classList.remove("is-walking");
});
art.addEventListener("transitionend", () => {
  if (!portrait.classList.contains("is-walking")) cancelAnimationFrame(frame);
});
