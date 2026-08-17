/* =========================================
   GULSHAN KUMAR PORTFOLIO
   SCROLL ANIMATION
========================================= */


document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       SCROLL REVEAL
    ----------------------------------------- */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    };


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            observerOptions
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* -----------------------------------------
       SMOOTH ANCHOR SCROLL
    ----------------------------------------- */

    const links =
        document.querySelectorAll('a[href^="#"]');


    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* -----------------------------------------
       HEADER SHADOW ON SCROLL
    ----------------------------------------- */

    const header =
        document.querySelector(".header");


    function updateHeader() {

        if (window.scrollY > 30) {

            header.style.background = "rgba(0, 0, 0, 0.92)";

            header.style.backdropFilter = "blur(12px)";

        } else {

            header.style.background = "#000";

            header.style.backdropFilter = "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();

});
