document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENTS
    ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");


    /* =====================================
       MOBILE MENU
    ===================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const menuIsOpen =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                menuIsOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a navigation link */

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    const pageLinks =
        document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            /* Ignore empty # links */

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            /* Update URL without jumping */

            history.pushState(
                null,
                "",
                targetId
            );

        });

    });


    /* =====================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================== */

    document.addEventListener("click", function (event) {

        if (!menuToggle || !navMenu) {
            return;
        }


        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================
       ESCAPE KEY CLOSES MENU
    ===================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (
                navMenu &&
                navMenu.classList.contains("active")
            ) {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


    /* =====================================
       RESET MENU ON DESKTOP
    ===================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});
