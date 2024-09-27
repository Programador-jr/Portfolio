'use strict';

/**
 * Element toggle function
 */
const elemToggleFunc = (elem) => elem.classList.toggle("active");

/**
 * Header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
	header.classList.toggle("active", window.scrollY >= 10);
	goTopBtn.classList.toggle("active", window.scrollY >= 10);
});

/**
 * Navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", () => {
	elemToggleFunc(navToggleBtn);
	elemToggleFunc(navbar);
	elemToggleFunc(document.body);
});

/**
 * Skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		elemToggleFunc(toggleBtnBox);
		toggleBtns.forEach(elemToggleFunc);
		elemToggleFunc(skillsBox);
	});
});

/**
 * Dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", () => {
	elemToggleFunc(themeToggleBtn);
	const isActive = themeToggleBtn.classList.contains("active");

	document.body.classList.toggle("dark_theme", !isActive);
	document.body.classList.toggle("light_theme", isActive);
	localStorage.setItem("theme", isActive ? "light_theme" : "dark_theme");
});

/**
 * Check & apply last selected theme from localStorage
 */
const savedTheme = localStorage.getItem("theme");
const isLightTheme = savedTheme === "light_theme";
themeToggleBtn.classList.toggle("active", isLightTheme);
document.body.classList.toggle("dark_theme", !isLightTheme);
document.body.classList.toggle("light_theme", isLightTheme);