const homeSection = document.querySelector(".home-section");
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");
const smallCircles = document.querySelectorAll(".small-circle");
const risingCircle = document.querySelector(".rising-circle");

const mainChildren = document.getElementById("main").children;

// removes all circles from top of nav
function removeCircles() {
  smallCircles.forEach((circle) => {
    circle.classList.contains("show-display") &&
      circle.classList.remove("show-display");
  });
}

const options = {
  root: null,
  threshold: 0.4,
};

const sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry, index) => {
    // finds position of target section in array of sections in <main>
    const targetIndex = Array.from(mainChildren).indexOf(entry.target);
    // circle is added to corresponding nav item as nav and main have same order
    if (entry.isIntersecting) {
      console.log(risingCircle.classList);
      removeCircles();
      smallCircles[targetIndex].classList.add("show-display");

      if (targetIndex === 2) {
        risingCircle.classList.remove("fall");
        risingCircle.classList.add("rise");
      }
      if (targetIndex === 1 && risingCircle.classList.contains("rise")) {
        risingCircle.classList.remove("rise");
        risingCircle.classList.add("fall");
      }
      if (targetIndex === 3) {
        // risingCircle.classList.remove("rise");
        // risingCircle.classList.add("center");
      }
    }
  });
}, options);

sectionObserver.observe(homeSection);
sectionObserver.observe(projectsSection);
sectionObserver.observe(aboutSection);
sectionObserver.observe(contactSection);
