const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const world = document.getElementById("world");
const hiddenLayer = document.getElementById("hiddenLayer");
const voidTrigger = document.getElementById("voidTrigger");

const base = document.querySelector(".base");
const ghost = document.querySelector(".ghost");
const projects = document.querySelectorAll("[data-project]");

// intro timing
setTimeout(() => {
  text1.classList.add("show");
}, 2500);

setTimeout(() => {
  text2.classList.add("show");
}, 5200);

setTimeout(() => {
  document.body.classList.add("enter");
  world.classList.add("is-visible");
  world.setAttribute("aria-hidden", "false");
}, 8200);

// subtle double exposure movement
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const move = 5;

  if (base) {
    base.style.transform = `scale(1.1) translate(${x * move}px, ${y * move}px)`;
  }

  if (ghost) {
    ghost.style.transform = `scale(1.12) translate(${x * -move}px, ${y * -move}px)`;
  }
});

// hover-hold feel
projects.forEach((project) => {
  let timer;

  project.addEventListener("mouseenter", () => {
    timer = setTimeout(() => {
      project.classList.add("is-active");
    }, 180);
  });

  project.addEventListener("mouseleave", () => {
    clearTimeout(timer);
    project.classList.remove("is-active");
  });
});

// hidden layer
voidTrigger.addEventListener("click", () => {
  hiddenLayer.classList.add("is-visible");
  hiddenLayer.setAttribute("aria-hidden", "false");
});
