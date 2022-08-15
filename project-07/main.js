
const inputField = document.getElementById("input-task");
const addTask = document.getElementById("add-task");


addTask.addEventListener("click", () => {
    const newTask = inputField.value;
    const inCompletedTask = document.getElementById("incompleted");
    const newLabel = document.createElement("label");
    const LabelInput = document.createElement("input");
    LabelInput.type = "checkbox";
    const LabelList = document.createElement("li");

    // adding label to ul tag
    inCompletedTask.appendChild(newLabel);
    // adding lis and input to the label tag

    newLabel.appendChild(LabelInput)
    newLabel.appendChild(LabelList);

    // adding given text to the li 
    LabelList.innerText = newTask
    inputField.value = "";
});


//=====================
const getCheckBox = document.getElementById("do-complete");



getCheckBox.addEventListener("click", () => {
    const doComplted = document.getElementById("do-complete").parentNode;
    const compltedLi = document.getElementById("completed");
    compltedLi.appendChild(doComplted);
})



