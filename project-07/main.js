
const inputField = document.getElementById("input-field");
console.log(inputField.value);
const inputKeys = document.getElementsByTagName("span");



for( const key of inputKeys) {
    key.addEventListener("click", () => {
        const sum = document.getElementById("equal")
        inputField.value += key.innerText;
        sum.addEventListener("click", () => {
        inputField.value + inputField.value
        })
    })
}



