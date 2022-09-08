
const getTotalCasePrice = (newCaseNumber) => {
   const totalCasePrice = newCaseNumber * 59;
   const casePriceElement = document.getElementById("case-price");
   casePriceElement.innerText = totalCasePrice;
}


document.getElementById("case-plus-btn").addEventListener("click", () => {
   const newCaseNumber = updateProductNumber(true, "case-count-field");

   setValueById("case-count-field", newCaseNumber)
   getTotalCasePrice(newCaseNumber);
   calculateSubTotal();
   finalTotal();


})
document.getElementById("case-minus-btn").addEventListener("click", () => {
   const newCaseNumber = updateProductNumber(false, "case-count-field");

   setValueById("case-count-field", newCaseNumber)
   getTotalCasePrice(newCaseNumber);
   calculateSubTotal();
   finalTotal();
})