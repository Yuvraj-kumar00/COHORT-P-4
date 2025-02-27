const accordionItem = document.querySelectorAll(".accordion-item");
const accordionButton = document.querySelectorAll(".accordion-button");

let count = 0;

accordionItem.forEach( (item, i) => {
    
    item.addEventListener("click", (e) => {

        if (count % 2 === 0) {
            accordionItem[i].classList.add("active")
            accordionButton[i].classList.add("active")
        }
         else {
            accordionItem[i].classList.remove("active")
            accordionButton[i].classList.remove("active")
         }
        count++

    })
})