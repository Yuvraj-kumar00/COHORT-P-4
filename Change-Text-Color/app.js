const mainHeading =document.querySelector("#mainHeading");
const buttons = document.querySelector(".color-buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.innerText === "Red") {
        mainHeading.style.color = "#ff0000";
    }
    else if (e.target.innerText === "Green") {
        mainHeading.style.color = "#adff2f";
    }
    else if (e.target.innerText === "Blue") {
        mainHeading.style.color = "#0000ff";
    }
    else if (e.target.innerText === "Purple") {
        mainHeading.style.color = "#800080";
    } 
    else if (e.target.innerText === "Reset") {
        mainHeading.style.color = "#000";
    } 
    
})
