const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    if (currentActive < circles.length) {
        currentActive++;
        update();
    }
});

prev.addEventListener("click", () => {
    if (currentActive > 1) {
        currentActive--;
        update();
    }
});

function update() {

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".circle.active");

    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    // Proper button handling (important for Cypress tests)
    if (currentActive === 1) {
        prev.setAttribute("disabled", "true");
    } else {
        prev.removeAttribute("disabled");
    }

    if (currentActive === circles.length) {
        next.setAttribute("disabled", "true");
    } else {
        next.removeAttribute("disabled");
    }
}