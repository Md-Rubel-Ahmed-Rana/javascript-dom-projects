const genaratePin = () => {
    const pin = Math.round( Math.random() * 10000);
    
    return pin
};

const getPin = () => {
    const pin = genaratePin();
    const newPin = pin + "";

    if (newPin.length === 4) {
        return newPin
    } else{
        console.log("Digit not 4", newPin);
        return getPin();
    }
}

document.getElementById("genarate-pin").addEventListener("click", () => {
    const pin = getPin();
    const displayField = document.getElementById("display-pin");
    displayField.value = pin;
});

document.getElementById("calculator").addEventListener("click", (event) => {
    const typedNumberField = document.getElementById("typed-numbers");
    const previousNumber = typedNumberField.value;
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number === "C") {
            typedNumberField.value = ""
        } else if(number === "<"){
            const digits = previousNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typedNumberField.value = remainingDigits;
        }
    } else{
      const newNumbers = previousNumber + number;
      typedNumberField.value = newNumbers;
    }

});


document.getElementById("verify-pin").addEventListener("click", () => {
    const displayPin = document.getElementById("display-pin");
    const typedNumber = document.getElementById("typed-numbers");
    const pinFailed = document.getElementById("pin-failed");
    const pinSuccess = document.getElementById("pin-success");

    if (displayPin.value === typedNumber.value) {
       pinSuccess.style.display = "block";
       pinFailed.style.display = "none";
    }else{
       pinFailed.style.display = "block";
       pinSuccess.style.display = "none";
    }


})

