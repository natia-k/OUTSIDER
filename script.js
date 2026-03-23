const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");
const voidEl = document.getElementById("void");
const hidden = document.getElementById("hidden");

const base = document.querySelector(".base");
const ghost = document.querySelector(".ghost");

// timing
setTimeout(() => t1.classList.add("show"), 2500);
setTimeout(() => t2.classList.add("show"), 5200);
setTimeout(() => document.body.classList.add("enter"), 8000);

// subtle double exposure movement
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const move = 5;

  base.style.transform = `scale(1.08) translate(${x * move}px, ${y * move}px)`;
  ghost.style.transform = `scale(1.1) translate(${x * -move}px, ${y * -move}px)`;
});

// hidden layer
voidEl.addEventListener("click", () => {
  hidden.classList.add("active");
});
