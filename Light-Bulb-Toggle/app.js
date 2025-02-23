const toggleButton = document.querySelector("#toggleButton");
const bulb = document.querySelector("#bulb");
const bulbStatus = document.querySelector("#status");
const body = document.querySelector("body");

toggleButton.addEventListener("click", (e) => {
    if (e.target.innerText === "Turn On") {
        bulb.classList.add("on");
        e.target.innerText = "Turn Off";
        bulbStatus.innerText = "Status: On";
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
    } 
    
   else {
        bulb.classList.remove("on");
        e.target.innerText = "Turn On";
        bulbStatus.innerText = "Status: Off";
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
    } 
    
    
})