// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".section, .skill-card, .project, .contact-section"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});


// Portfolio image click effect
document.querySelectorAll(".project img").forEach(image => {

  image.addEventListener("click", () => {

    const viewer = document.createElement("div");

    viewer.className = "image-viewer";

    viewer.innerHTML = `
      <div class="viewer-close">×</div>
      <img src="${image.src}" alt="${image.alt}">
    `;

    document.body.appendChild(viewer);

    viewer.addEventListener("click", () => {
      viewer.remove();
    });

  });

});


// Prevent video click from triggering image viewer
document.querySelectorAll(".project video").forEach(video => {
  video.addEventListener("click", event => {
    event.stopPropagation();
  });
});


// Current year
const year = document.querySelector(".copyright");

if (year) {
  year.innerHTML =
    `© ${new Date().getFullYear()} Gulshan Kumar. All Rights Reserved.`;
}
