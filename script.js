const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const base = document.querySelector(".base");
const ghost = document.querySelector(".ghost");
const voidTrigger = document.getElementById("voidTrigger");
const hiddenLayer = document.getElementById("hiddenLayer");

setTimeout(() => {
  text1.classList.add("show");
}, 2500);

setTimeout(() => {
  text2.classList.add("show");
}, 5200);

setTimeout(() => {
  document.body.classList.add("enter");
}, 8200);

document.addEventListener("mousemove", (e) => {
  if (!base || !ghost) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const move = 5;

  base.style.transform = `scale(1.1) translate(${x * move}px, ${y * move}px)`;
  ghost.style.transform = `scale(1.12) translate(${x * -move}px, ${y * -move}px)`;
});

if (voidTrigger && hiddenLayer) {
  voidTrigger.addEventListener("click", () => {
    hiddenLayer.classList.add("show");
  });
}
