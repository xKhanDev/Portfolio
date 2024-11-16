// script.js
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function checkMobile() {
    if (isMobileDevice() || window.innerWidth <= 768) {
        // Show the overlay
        const overlay = document.getElementById("mobile-overlay");
        const container = document.querySelector(".container");
        overlay.style.display = "flex";
        overlay.classList.add("active-overlay");
        container.style.display = "none";

        // Lock the body to prevent scrolling
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
    }
}

document.addEventListener("DOMContentLoaded", checkMobile);
window.addEventListener("resize", checkMobile);

