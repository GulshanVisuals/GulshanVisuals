/* =========================================
   GULSHAN KUMAR PORTFOLIO
   SCROLL ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(".reveal");


    /* -----------------------------------------
       SCROLL REVEAL
    ----------------------------------------- */

    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    };


    const revealObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        }, observerOptions);


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* -----------------------------------------
       CONTACT BUTTONS
    ----------------------------------------- */

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Opening WhatsApp contact..."
            );

        });

    });


    /* -----------------------------------------
       SIMPLE PARALLAX EFFECT
    ----------------------------------------- */

    const heroCircle =
        document.querySelector(".hero-circle");


    window.addEventListener("scroll", function () {

        if (!heroCircle) {
            return;
        }

        const scrollPosition =
            window.scrollY;

        heroCircle.style.transform =
            "translateY(" +
            scrollPosition * 0.08 +
            "px)";

    });


    /* -----------------------------------------
       PAGE LOAD ANIMATION
    ----------------------------------------- */

    setTimeout(function () {

        const firstElements =
            document.querySelectorAll(
                ".hero .reveal"
            );

        firstElements.forEach(function (element) {

            element.classList.add("active");

        });

    }, 150);


});
