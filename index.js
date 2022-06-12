const homeSection = document.querySelector(".home-section");
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");

const smallCircles = document.querySelectorAll(".small-circle");

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
  threshold: 0.5,
};

const homeObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry, index) => {
    // finds position of target section in array of sections in main
    const targetIndex = Array.from(mainChildren).indexOf(entry.target);
    // cirlce is added to corresponding nav item as nav and mian have same order
    if (entry.isIntersecting) {
      removeCircles();
      smallCircles[targetIndex].classList.add("show-display");
    }
  });
}, options);

homeObserver.observe(homeSection);
homeObserver.observe(projectsSection);
homeObserver.observe(aboutSection);
