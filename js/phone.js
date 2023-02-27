// phone details
function updateTotalPhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateTotalPhoneNumber(true);
    updateTotalPhonePrice(newPhoneNumber);

    // calculation total 
    calculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateTotalPhoneNumber(false);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal();
})