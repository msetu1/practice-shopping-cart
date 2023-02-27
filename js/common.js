function getTextElementvalueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;
}
function setTextElementvalueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementvalueById('phone-total');
    const currentCaseTotal = getTextElementvalueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementvalueById('sub-total', currentSubTotal);
    // tax amount
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementvalueById('tax-amount', taxAmount)

    // final amount 
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementvalueById('final-total', finalAmount);
}