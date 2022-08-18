
const taskBtn = document.getElementById("task-btn")
taskBtn.addEventListener("click", () => {
    const inCompleteUl = document.getElementById("incompleted");
    const taskField = document.getElementById("add-task");
    const newTask = taskField.value;


    // create needed tag
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    const label = document.createElement("label");
    label.innerText = newTask;
    const listItem = document.createElement("li");
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    inCompleteUl.appendChild(listItem)
})


const checkBox = document.getElementById("check-box");

checkBox.addEventListener("click", function()  {
    const completedUl = document.getElementById("completed");

    const listItem = checkBox.parentNode.parentNode;

    listItem.removeChild(listItem);
    



})
