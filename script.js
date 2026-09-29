const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

// =========================
// HEADER AL HACER SCROLL
// =========================

function updateHeader() {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);
updateHeader();

// =========================
// MENÚ MÓVIL
// =========================

menuToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
    );
});

// =========================
// CERRAR MENÚ AL HACER CLICK
// =========================

document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});

// =========================
// AÑO DEL FOOTER
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}