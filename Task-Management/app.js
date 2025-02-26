const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const emptyList = document.querySelector(".empty-list");

let completedTaskValue = 0;

// Input value checking 
addButton.addEventListener("click", () => {

    if (taskInput.value === "") {
        alert("Please Write Something Before Adding.")
    }  

    else {
        createTaskItem();
        removeEmptyList();
    }
})


// createTaskItem Function
const createTaskItem = () => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add("complete-checkbox");
    li.appendChild(checkbox);
    checkbox.addEventListener("click", checkingCheckedItems)

    const para = document.createElement("p");
    para.innerText = taskInput.value;
    para.classList.add("task-text");
    li.appendChild(para);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTaskItem)

    taskList.appendChild(li);

    taskInput.value = "";

    totalTask()
}

// remove emptyList
const removeEmptyList = () => {
    emptyList.remove()
}

// checkingCheckedItems Function
const checkingCheckedItems = (e) => {
    
    if (e.target.checked === true) {
        e.target.nextElementSibling.classList.add("crossText");
        completedTaskValue++
        completedTask();
    } 

    else {
        e.target.nextElementSibling.classList.remove("crossText");
        completedTaskValue--
        completedTask();
    }

}

// deleteTaskItem Function
const deleteTaskItem = (e) => {

    if (e.target.innerText === "Delete") {
        e.target.parentElement.remove();
        totalTask();
    }
    
}

// totalTasks Function
const totalTask = () => {
    totalTasks.innerText = `Total tasks: ${taskList.children.length}`;
}

// completedTasks Function
const completedTask = () => {
    completedTasks.innerText = `Completed: ${completedTaskValue}`;
}