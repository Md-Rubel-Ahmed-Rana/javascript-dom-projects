
const getTotalPhonePrice = (newPhoneNumber) => {
   const totalPhonePrice = newPhoneNumber * 1219;
   const phonePriceElement = document.getElementById("phone-price");
   phonePriceElement.innerText = totalPhonePrice;
}


document.getElementById("phone-plus-btn").addEventListener("click", () => {
   const newPhoneNumber = updateProductNumber(true, "phone-count-field");

   setValueById("phone-count-field", newPhoneNumber)
   getTotalPhonePrice(newPhoneNumber);
   calculateSubTotal();
   finalTotal();

})
document.getElementById("phone-minus-btn").addEventListener("click", () => {
   const newPhoneNumber = updateProductNumber(false, "phone-count-field");

   setValueById("phone-count-field", newPhoneNumber)
   getTotalPhonePrice(newPhoneNumber);
   calculateSubTotal();
   finalTotal();
})