// TEXT TIMING (keep your current logic)
setTimeout(() => {
  document.getElementById("text1").classList.add("show");
}, 2500);

setTimeout(() => {
  document.getElementById("text2").classList.add("show");
}, 5200);

setTimeout(() => {
  document.body.classList.add("enter");
}, 8200);


// 🔥 DOUBLE EXPOSURE MOVEMENT

const base = document.querySelector(".base");
const ghost = document.querySelector(".ghost");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const move = 5; // MAX SHIFT (px)

  // base layer (Berlin — stable)
  base.style.transform = `
    scale(1.1)
    translate(${x * move}px, ${y * move}px)
  `;

  // ghost layer (Tbilisi — opposite direction)
  ghost.style.transform = `
    scale(1.12)
    translate(${x * -move}px, ${y * -move}px)
  `;
});
