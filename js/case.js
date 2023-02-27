function updateCaseTotalNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseAmount = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseAmount + 1;

    }
    else {
        newCaseNumber = previousCaseAmount - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseTotalNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseTotalNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})