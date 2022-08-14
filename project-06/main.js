const ageBtn = document.getElementById("age-cal-btn");
const ageInput = document.getElementById("age-value");
const showAge = document.getElementById("show-age")

// by default style for showAge tag
showAge.style.display = "none";

// getting full date and time
const date = new Date();

ageBtn.addEventListener("click", () => {
    // getting current year
    const currentYear = date.getFullYear();
    // getting user input
    const givenAge = ageInput.value;
    // checking user input filled or emptry
    if (givenAge === "") {
        showAge.style.display = "block";
        showAge.innerHTML = "You dont't enter your age"
    } else{
        // checking user birth age greater than currentYear or not
        if (givenAge > currentYear) {
             showAge.innerHTML = "Age must be less than " + currentYear;
        } else{
            const presentAge = currentYear - givenAge;
            showAge.innerHTML = "You are  " + presentAge + " years old!"
            showAge.style.display = "block";
            ageInput.value = ""
        }
    }
    

})
