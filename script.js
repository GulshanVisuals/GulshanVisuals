document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    if (!menuButton || !menu) {
        return;
    }


    /* OPEN / CLOSE MENU */

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        menu.classList.toggle("active");

    });


    /* NAVIGATION LINKS */

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

        });

    });


    /* CLOSE WHEN CLICKING OUTSIDE */

    document.addEventListener("click", function (event) {

        if (
            !menu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            menu.classList.remove("active");

        }

    });


    /* CLOSE WITH ESCAPE */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            menu.classList.remove("active");

        }

    });

});
