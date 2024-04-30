import "./style.css";

// DOM elements
const DOM = {
  $body: document.querySelector("body"),
  $contenedor: document.querySelector(".contenedor"),
  $path: document.querySelector(".wavy-line path"),
};

// const toggleAnimateIn = () => {
//   DOM.$contenedor.classList.toggle("animateIn");
// };

DOM.$body.addEventListener("click", () => {
  if (DOM.$contenedor.classList.contains("animateIn")) {
    DOM.$contenedor.classList.remove("animateIn");
  } else {
    DOM.$contenedor.classList.add("animateIn");
  }
  path.getTotalLength(); // Forces the browser to recognize the initial value of stroke-dasharray
  path.classList.add("animate"); // Adding the class to start the animation
});

// Triggering the animation with JavaScript
// const path = document.querySelector(".wavy-line path");
// path.getTotalLength(); // Forces the browser to recognize the initial value of stroke-dasharray
// path.classList.add("animate"); // Adding the class to start the animation

// class App {
//   constructor() {
//     // Constructor code here
//     this.init();
//   }
//   // Methods and properties here
//   init() {
//     this.body = document.querySelector("body");
//     this.contenedor = document.querySelector(".contenedor");

//     this.bindEvents();
//   }

//   bindEvents() {}
// }

// export const app = new App();
