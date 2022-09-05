function getPin() {
    let pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
const displayPinField = document.getElementById('display-pin');
const typedField = document.getElementById('type-field');
document.getElementById('generate-pin').addEventListener("click", function () {
    const pin = getPin();
    // console.log(pin)
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener("click", function (event) {
    const number = event.target.innerText;
    const previousTypedNumber = typedField.value;
    if (isNaN(number)) {
        if (number === "C") {
            typedField.value = "";
        } else if (number === "<") {
            const typedChar = previousTypedNumber.split('');
            typedChar.pop();
            const newtypedChar = typedChar.join('')
            typedField.value = newtypedChar;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedField.value = newTypedNumber;
    }
});
document.getElementById("verify").addEventListener("click", function(){
    const displayPin = displayPinField.value;
    const currentPin = typedField.value;
    const successMessage = document.getElementById('success-message');
    const failureMessage = document.getElementById('failure-message');
    if(displayPin == currentPin){
        successMessage.style.display = "block";
        failureMessage.style.display = "none";
    }else{
        failureMessage.style.display = "block";
        successMessage.style.display = "none";
    }
})