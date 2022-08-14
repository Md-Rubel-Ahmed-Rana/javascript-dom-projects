
const deleteBtn = document.getElementById("delete-btn");
const inputField = document.getElementById("input-field");


inputField.addEventListener("keyup", () => {
   const inputText = inputField.value;
   if (inputText === "DELETE") {
      deleteBtn.removeAttribute("disabled")
      deleteBtn.style.backgroundColor = "blue"
   } else{
      deleteBtn.setAttribute("disabled", true)
      deleteBtn.style.backgroundColor = "#8080806b"
   }
   
});

deleteBtn.addEventListener("click", () => {
   const githubRepo = document.getElementById("repo");
   githubRepo.style.display = "none";
   inputField.value = ""
})
