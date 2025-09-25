
document.addEventListener("DOMContentLoaded", () =>{
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    const navList = document.getElementById("navList");
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
            navbar.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });

    navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});