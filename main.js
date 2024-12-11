const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
    Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
        item.classList.remove("active");
    });

    e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .booking", {
    ...scrollRevealOption,
    delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
});

// offer container
ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
    interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("background-music");
    audio.volume = 0.0000000001; // Set volume to 50%
});

const audio = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');
const volumeControlContainer = document.getElementById('volume-control-container');
const closeButton = document.getElementById('close-button');

audio.volume = volumeSlider.value;

volumeSlider.addEventListener('input', function () {
    audio.volume = this.value;
});

closeButton.addEventListener('click', function () {
    volumeControlContainer.style.display = 'none';
});