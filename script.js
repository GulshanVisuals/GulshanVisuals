/* =========================================
   GULSHAN KUMAR PORTFOLIO
   BLACK & WHITE DESIGN
   MOBILE FRIENDLY
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #000;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}


/* =========================================
   NAVIGATION
========================================= */

.navbar {
    width: 100%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 6vw;

    border-bottom: 1px solid #222;

    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
}

.logo {
    font-size: 42px;
    font-weight: 900;
    letter-spacing: -3px;
}

.logo span,
.footer-logo span {
    color: #777;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 38px;
}

.nav-menu a {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;

    transition: 0.3s ease;
}

.nav-menu a:hover {
    color: #888;
}

.nav-whatsapp {
    border: 1px solid #555;
    padding: 12px 18px;
}


/* =========================================
   MOBILE MENU BUTTON
========================================= */

.menu-toggle {
    display: none;

    width: 45px;
    height: 45px;

    background: transparent;
    border: 1px solid #444;

    cursor: pointer;

    padding: 10px;

    flex-direction: column;
    justify-content: center;
    gap: 6px;
}

.menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;

    transition: 0.3s ease;
}


/* =========================================
   HERO
========================================= */

.hero {
    min-height: calc(100vh - 90px);

    display: flex;
    align-items: center;

    padding: 100px 6vw;

    position: relative;

    overflow: hidden;
}

.hero-content {
    width: 100%;
    max-width: 900px;

    position: relative;
    z-index: 2;
}

.hero-circle {
    position: absolute;

    width: 850px;
    height: 850px;

    border: 1px solid #292929;
    border-radius: 50%;

    right: -350px;
    top: 80px;

    animation: rotateCircle 20s linear infinite;
}

@keyframes rotateCircle {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.eyebrow {
    font-size: 14px;
    letter-spacing: 8px;
    color: #777;

    margin-bottom: 45px;
}

.hero h1 {
    font-size: clamp(70px, 13vw, 180px);

    line-height: 0.78;

    letter-spacing: -8px;

    font-weight: 900;

    margin-bottom: 55px;
}

.hero h1 span {
    display: block;
    color: #555;
}

.hero h2 {
    font-size: clamp(18px, 2.5vw, 28px);

    font-weight: 400;

    letter-spacing: 3px;

    max-width: 800px;

    margin-bottom: 35px;
}

.hero-description {
    color: #999;

    font-size: 18px;

    line-height: 1.7;

    max-width: 650px;

    margin-bottom: 45px;
}


/* =========================================
   BUTTONS
========================================= */

.hero-buttons,
.contact-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btn {
    min-width: 220px;

    padding: 18px 30px;

    display: inline-flex;

    justify-content: center;
    align-items: center;

    font-size: 13px;

    letter-spacing: 3px;

    transition: 0.3s ease;
}

.btn-primary {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
}

.btn-primary:hover {
    background: #000;
    color: #fff;
}

.btn-outline {
    border: 1px solid #555;
    color: #fff;
}

.btn-outline:hover {
    border-color: #fff;
    background: #fff;
    color: #000;
}


/* =========================================
   SECTIONS
========================================= */

.section {
    min-height: 80vh;

    display: grid;

    grid-template-columns: 15% 85%;

    padding: 130px 6vw;

    border-top: 1px solid #222;
}

.section-number {
    color: #555;

    font-size: 14px;

    letter-spacing: 3px;
}

.section-content {
    max-width: 1100px;
}

.section-label {
    color: #777;

    font-size: 13px;

    letter-spacing: 6px;

    margin-bottom: 35px;
}

.section h2 {
    font-size: clamp(45px, 7vw, 100px);

    line-height: 0.95;

    letter-spacing: -4px;

    margin-bottom: 45px;
}

.section h2 span {
    color: #555;
}

.section-content > p:not(.section-label) {
    color: #999;

    max-width: 700px;

    font-size: 18px;

    line-height: 1.8;

    margin-bottom: 25px;
}


/* =========================================
   SKILLS
========================================= */

.skills-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 1px;

    background: #292929;

    margin-top: 70px;
}

.skill-card {
    background: #000;

    padding: 45px;

    min-height: 200px;

    transition: 0.4s ease;
}

.skill-card:hover {
    background: #111;
}

.skill-card span {
    color: #555;

    font-size: 13px;

    letter-spacing: 2px;
}

.skill-card h3 {
    font-size: 28px;

    margin: 30px 0 15px;
}

.skill-card p {
    color: #777;

    font-size: 15px;
}


/* =========================================
   WORK
========================================= */

.work-intro {
    margin-bottom: 60px;
}

.work-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.work-card {
    border: 1px solid #292929;

    overflow: hidden;

    transition: 0.4s ease;
}

.work-card:hover {
    transform: translateY(-8px);

    border-color: #666;
}

.work-placeholder {
    height: 300px;

    display: flex;

    justify-content: center;
    align-items: center;

    background: #111;

    color: #555;

    font-size: 14px;

    letter-spacing: 4px;
}

.work-card h3 {
    font-size: 22px;

    padding: 25px 25px 8px;
}

.work-card p {
    color: #777;

    padding: 0 25px 25px;
}


/* =========================================
   CONTACT
========================================= */

.contact {
    min-height: 70vh;
}

.contact h2 {
    max-width: 900px;
}

.contact-buttons {
    margin-top: 45px;
}


/* =========================================
   FOOTER
========================================= */

footer {
    border-top: 1px solid #222;

    padding: 50px 6vw;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;
}

.footer-logo {
    font-size: 35px;

    font-weight: 900;

    letter-spacing: -3px;
}

footer p {
    color: #555;

    font-size: 13px;
}

footer a {
    color: #777;

    font-size: 12px;

    letter-spacing: 2px;
}

footer a:hover {
    color: #fff;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

    .navbar {
        height: 75px;
        padding: 0 25px;
    }

    .logo {
        font-size: 34px;
    }

    .menu-toggle {
        display: flex;
        position: relative;
        z-index: 1100;
    }

    .nav-menu {
        position: fixed;

        top: 75px;
        right: -100%;

        width: 100%;
        height: calc(100vh - 75px);

        background: #000;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        gap: 30px;

        transition: right 0.4s ease;

        border-top: 1px solid #222;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-menu a {
        font-size: 18px;
    }

    .nav-whatsapp {
        padding: 15px 25px;
    }

    .hero {
        min-height: auto;

        padding: 120px 25px;
    }

    .hero-circle {
        width: 600px;
        height: 600px;

        right: -350px;
    }

    .section {
        grid-template-columns: 1fr;

        padding: 100px 25px;

        gap: 40px;
    }

    .section-number {
        margin-bottom: 10px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .work-grid {
        grid-template-columns: 1fr;
    }

    footer {
        flex-direction: column;

        text-align: center;
    }
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

    .navbar {
        height: 70px;

        padding: 0 20px;
    }

    .logo {
        font-size: 30px;
    }

    .menu-toggle {
        width: 42px;
        height: 42px;
    }

    .nav-menu {
        top: 70px;

        height: calc(100vh - 70px);
    }

    .hero {
        padding: 100px 20px 80px;

        min-height: calc(100vh - 70px);

        align-items: center;
    }

    .hero-circle {
        width: 500px;
        height: 500px;

        right: -320px;
        top: 180px;
    }

    .eyebrow {
        font-size: 10px;

        letter-spacing: 5px;

        margin-bottom: 35px;
    }

    .hero h1 {
        font-size: clamp(58px, 17vw, 90px);

        letter-spacing: -5px;

        line-height: 0.82;

        margin-bottom: 40px;
    }

    .hero h2 {
        font-size: 17px;

        line-height: 1.6;

        letter-spacing: 1.5px;

        margin-bottom: 25px;
    }

    .hero-description {
        font-size: 16px;

        line-height: 1.7;

        margin-bottom: 35px;
    }

    .hero-buttons {
        flex-direction: column;

        width: 100%;
    }

    .btn {
        width: 100%;

        min-width: 0;

        padding: 17px 20px;
    }

    .section {
        padding: 90px 20px;

        min-height: auto;
    }

    .section h2 {
        font-size: clamp(42px, 13vw, 65px);

        letter-spacing: -3px;

        margin-bottom: 35px;
    }

    .section-content > p:not(.section-label) {
        font-size: 16px;
    }

    .section-label {
        font-size: 11px;

        letter-spacing: 4px;
    }

    .skills-grid {
        margin-top: 45px;
    }

    .skill-card {
        padding: 30px;

        min-height: 170px;
    }

    .skill-card h3 {
        font-size: 23px;

        margin: 22px 0 10px;
    }

    .work-grid {
        margin-top: 40px;
    }

    .work-placeholder {
        height: 220px;
    }

    .contact-buttons {
        flex-direction: column;

        width: 100%;
    }

    footer {
        padding: 40px 20px;

        gap: 20px;
    }

}


/* =========================================
   SMALL PHONES
========================================= */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 55px;

        letter-spacing: -4px;
    }

    .hero h2 {
        font-size: 15px;
    }

    .hero-description {
        font-size: 15px;
    }

    .section h2 {
        font-size: 40px;
    }

}
