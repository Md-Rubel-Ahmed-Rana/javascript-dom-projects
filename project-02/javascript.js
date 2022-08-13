
const button = document.getElementById("update-btn");
const updateText = document.getElementById("update-text");
const inputField = document.getElementById("input-field");



button.addEventListener("click", function() {
   let inputText = inputField.value;
   updateText.innerText = inputText;
   inputField.value = " "
})
