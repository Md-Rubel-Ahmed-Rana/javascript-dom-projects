
// Step-1: select all the necessary varible
const commentDiv = document.getElementById("comment-div");
const commentBtn = document.getElementById("comment-btn");

commentBtn.addEventListener("click", () => {
   const commentBox = document.getElementById("comment-box");
   const comment = commentBox.value;

   // create a p tag
   const para = document.createElement("p");
   para.innerText = comment;

   // add the para tag to the commentDiv tag
   commentDiv.appendChild(para);

   // clear the commentBox value
   commentBox.value = ""
})