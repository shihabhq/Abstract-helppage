const firstBar = document.querySelector(".ham:nth-child(1)");
secondBar = document.querySelector(".ham:nth-child(2)");
thirdBar = document.querySelector(".ham:nth-child(3)");
hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    firstBar.classList.toggle("ham-rotate1");
    secondBar.classList.toggle("opacity-0");
    thirdBar.classList.toggle("ham-rotate2");
});

//magnifier 
const navElements = document.querySelector(".nav-element");
magnifier = document.querySelector(".fa-search");
searchDiv = document.querySelector("#search-div");
xmark = document.querySelector("#xmark");

magnifier.addEventListener("click", function () {
    navElements.classList.remove("flex");
    navElements.classList.add("hidden");
    searchDiv.classList.add("flex");
    searchDiv.classList.remove("hidden");
});

xmark.addEventListener("click", function () {
    navElements.classList.remove("hidden");
    navElements.classList.add("flex");
    searchDiv.classList.add("hidden");
    searchDiv.classList.remove("flex");
});
