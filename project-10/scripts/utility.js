const updateProductNumber = (isIncrease, inputFieldId) => {
   const caseCountField = document.getElementById(inputFieldId);
   const caseCountString = caseCountField.value;
   const previousCaseNumber = parseInt(caseCountString);
   let newCaseNumber;

   if (isIncrease) {
      newCaseNumber = previousCaseNumber + 1;
   } else{
      newCaseNumber = previousCaseNumber - 1;
   }

   return newCaseNumber;
};

const getTextElementValueById = (elementId) => {
   const currentTotal = document.getElementById(elementId);
   const currentTotalString = currentTotal.innerText;
   const currenTotalPrice = parseInt(currentTotalString);

   return currenTotalPrice;
}

const setValueById = (elementId, newProductNumber) => {
    const phoneCountField = document.getElementById(elementId);
   phoneCountField.value = newProductNumber;
}

const calculateSubTotal = () => {
   const currentCaseTotalPrice = getTextElementValueById("case-price");
   const currentPhoneTotalPrice = getTextElementValueById("phone-price");
   const subTotal = currentCaseTotalPrice + currentPhoneTotalPrice;
   // calculate sub-total;
   const subTotalElement = document.getElementById("sub-total");
   subTotalElement.innerText = subTotal;
};


const finalTotal = () => {
    const subTotal = getTextElementValueById("sub-total");
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const finalPrice = subTotal + tax;

    const taxElement = document.getElementById("tax");
    const finalTotalElement = document.getElementById("final-total");
    taxElement.innerText = tax;
    finalTotalElement.innerText = finalPrice;

    return finalPrice;

}
