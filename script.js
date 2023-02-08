"use strict";

const theAside = document.querySelector(".the-aside");
const asideBtn = document.querySelector(".mobile-nav-btn");

asideBtn.addEventListener("click", function () {
  console.log("clicked successfully");
  theAside.classList.toggle("the-aside-open");
  asideBtn.classList.toggle("color-the-button");
});
