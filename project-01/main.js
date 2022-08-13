
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    // getting body tag
    const getBody = document.body;
    // creating section tag
    const sections = document.createElement("section");
    // adding section tag to the body tag
    getBody.appendChild(sections)
     // creating div tag
    const div = document.createElement("div");
    // adding div tag to the section tag
    sections.appendChild(div);
    // adding class name to the div tag
    div.classList.add("single-div")
    // creating h1 tag
    const header = document.createElement("h1");
    // creating p tag
    const para = document.createElement("p");
    // adding text to the h1 tag
    header.innerText = "Javascript EventListener";
    // adding text to the p tag
    para.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id esse nulla animi eum culpa minima vitae similique, ab velit obcaecati.";
    // adding h1 and p tags to the div
    div.appendChild(header);
    div.appendChild(para);
})

