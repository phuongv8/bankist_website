"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close");
const btnOpenModal = document.querySelectorAll(".btn-show");

const btnScroll = document.querySelector(".btn-scroll");
const section1 = document.getElementById("section-1");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");
const tabs = document.querySelectorAll(".operations-tab");
const tabsContainer = document.querySelector(".operations-container");
const tabsContent = document.querySelectorAll(".operations-content");

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

function scrollDown() {
  section1.scrollIntoView({ behavior: "smooth" });
}

function navigateToSections(e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
}

function switchActiveTab(e) {
  const clicked = e.target.closest(".operations-tab");

  // if click on container but outside btn, return null
  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("tab-active"));
  tabsContent.forEach((content) => content.classList.remove("content-active"));

  clicked.classList.add("tab-active");
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add("content-active");
}

btnOpenModal.forEach((btn) => btn.addEventListener("click", toggleModal));
btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});

btnScroll.addEventListener("click", scrollDown);

/* Event delegation:
1. Add event listener to common parent element 
2. Determine what element originated the event */

navLinks.addEventListener("click", navigateToSections);
tabsContainer.addEventListener("click", switchActiveTab);
