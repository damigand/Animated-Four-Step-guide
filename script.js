const firstStepButton = document.querySelector(".panel-1 button");
const secondStepButton = document.querySelector(".panel-2 button");
const thirdStepButton = document.querySelector(".panel-3 button");
const fourthStepButton = document.querySelector(".panel-4 button");

const panelSteps = document.querySelector(".panel-steps");

firstStepButton.addEventListener("click", () => {
    panelSteps.classList.remove("start");
    panelSteps.classList.add("active-1");
});

secondStepButton.addEventListener("click", () => {
    panelSteps.classList.remove("active-1");
    panelSteps.classList.add("active-2");
});

thirdStepButton.addEventListener("click", () => {
    panelSteps.classList.remove("active-2");
    panelSteps.classList.add("active-3");
});

fourthStepButton.addEventListener("click", () => {
    panelSteps.classList.remove("active-3");
    panelSteps.classList.add("start");
});
