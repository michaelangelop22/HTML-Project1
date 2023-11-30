// script.js

let loadMoreBtn = document.querySelector('#seemore');
let loadLessBtn = document.querySelector('#seeless');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .work-list .work')];
    for (let i = currentItem; i < currentItem + 3; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
        loadLessBtn.style.display = 'inline-block';
    }
};

loadLessBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .work-list .work')];
    for (let i = currentItem - 1; i >= currentItem - 3; i--) {
        if (boxes[i]) {
            boxes[i].style.display = 'none';
        }
    }
    currentItem -= 3;

    if (currentItem <= 3) {
        loadLessBtn.style.display = 'none';
        loadMoreBtn.style.display = 'inline-block';
    }
};

var typingEffect = new Typed(".multiText", {
    strings: ["Michael", "Angelo", "Belen"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
