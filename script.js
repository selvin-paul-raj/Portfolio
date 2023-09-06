let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.pageYOffset; // Use pageYOffset instead of screenY
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset:true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });

const typed1 = new Typed(".multiple-text1", {
  strings: [
    `Full Stack Developer `,
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
const typed2 = new Typed(".multiple-text2", {
  strings: [
    `Android App Developer `,
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
const typed3 = new Typed(".multiple-text3", {
  strings: [
    `UI/UX Designer  `,
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
