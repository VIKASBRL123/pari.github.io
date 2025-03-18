
document.addEventListener("DOMContentLoaded", function () {
     // Mobile Menu Toggle
     const menuToggle = document.querySelector(".menu-toggle");
     const navMenu = document.querySelector("nav ul");
 
     if (menuToggle) {
         menuToggle.addEventListener("click", function () {
             navMenu.classList.toggle("active");
         });
     }
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll("nav ul li a");
    
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
    
            // Only apply smooth scrolling for in-page links (those that start with "#")
            if (href && href.startsWith("#")) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: "smooth"
                        });
                    }
                });
            }
        });
    });
    
    // Simple image slider functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll(".gallery-container img");

    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? "block" : "none"; // Ensure only the first slide is visible initially
        });
    }
        
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
    }
    
    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    }
    
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlides();
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlides();
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links correctly
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let target = this.getAttribute("href");
            
            if (target && target.startsWith("#")) {
                event.preventDefault(); // Prevent default only for in-page links
                let targetElement = document.querySelector(target);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            } else if (target && !target.startsWith("#")) {
                window.location.href = target; // Navigate normally to another page
            }
        });
    });
});

