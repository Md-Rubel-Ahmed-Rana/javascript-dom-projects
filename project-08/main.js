const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.value = "";
                break;
            case "←":
                display.value = display.value.slice(0, -1)
                break;
            case "=":
                display.value = eval(display.value)
                break;
                case "√":
                    display.value = Math.sqrt(display.value);
                    break;
            default:
                display.value += e.target.innerText;
        }
    })
})