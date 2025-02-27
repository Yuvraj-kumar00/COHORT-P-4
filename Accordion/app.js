const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach( (allAcordionItems) => {
    const accordionButton = allAcordionItems.querySelector(".accordion-button");
    const accordionContent = allAcordionItems.querySelector(".accordion-content");

    accordionButton.addEventListener("click", () => {
        for (let i = 0; i < accordionItem.length; i++) {
            console.log(allAcordionItems);
            
            if (accordionItem[i] != allAcordionItems) {
                accordionItem[i].classList.remove("active")
            }  
            else {

                allAcordionItems.classList.toggle("active");
            }

        }
    })
    
})