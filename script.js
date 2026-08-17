document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".reveal");

    /*
       Add the hidden state only after JavaScript
       has successfully loaded.
    */

    elements.forEach(function (element) {
        element.classList.add("animate-hidden");
    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    entry.target.classList.remove("animate-hidden");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.10,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    elements.forEach(function (element) {
        observer.observe(element);
    });


    /* Header effect */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.background = "rgba(0,0,0,0.92)";
            header.style.backdropFilter = "blur(10px)";

        } else {

            header.style.background = "#000";
            header.style.backdropFilter = "none";

        }

    });


    /* Smooth scrolling */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
