const pages = document.querySelectorAll(".page");
let index = 0;

function showPages() {
    pages.forEach(p => p.style.display = "none");

    if (pages[index]) pages[index].style.display = "block";
    if (pages[index + 1]) pages[index + 1].style.display = "block";
}

document.getElementById("next").onclick = function () {
    if (index < pages.length - 2) {
        index += 2;
        showPages();
    }
};

document.getElementById("prev").onclick = function () {
    if (index > 0) {
        index -= 2;
        showPages();
    }
};

showPages();
