const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const ageInput = document.querySelector("#ageInput");
const bioInput = document.querySelector("#bioInput");

const nameDisplay = document.querySelector("#nameDisplay");
const jobDisplay = document.querySelector("#jobDisplay");
const ageDisplay = document.querySelector("#ageDisplay");
const bioDisplay = document.querySelector("#bioDisplay");


nameInput.addEventListener("input", () => {
    nameDisplay.innerText = nameInput.value;
})

jobInput.addEventListener("input", () => {
    jobDisplay.innerText = jobInput.value;
})

ageInput.addEventListener("input", () => {
    ageDisplay.innerText = ageInput.value;
})

bioInput.addEventListener("input", () => {
    bioDisplay.innerText = bioInput.value;
})