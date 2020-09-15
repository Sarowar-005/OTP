// Generate code function
function pinGenerate(){
    const generatePin = document.getElementById("generate-pin");
    const randomPin = Math.random() * 9999
    const roundPin = Math.round(randomPin);
    if (roundPin > 1000) {
        generatePin.value = roundPin;
    }
    isDisplayBlock("matchMessage", "none");
    isDisplayBlock("notMatchMessage", "none");
};
//Keyboard typeable
function activeKeyboard(captureValue){
    const setPin = document.getElementById("setPin");
    setPin.value += captureValue;
}

//Submit for compare generate pin Vs Set Pin
function isPinMatch(){
    const setPinNumber = getPinNumber("setPin")
    const generatePinNumber = getPinNumber("generate-pin");
    if (setPinNumber == generatePinNumber) {
        // document.getElementById("matchMessage").style.display = "block"
        isDisplayBlock("matchMessage", "block")
    }else{
        isDisplayBlock("notMatchMessage", "block")   
    }
}
//For generate pin and set pin
function getPinNumber(id){
    const pin = document.getElementById(id);
    const pinNumber = parseInt(pin.value)
    pin.value = "";
    return pinNumber
}
//Function create for backspace
function PressBackspace() {
    const setPin = document.getElementById("setPin");
    setPin.value = setPin.value.substring(0, setPin.value.length - 1);
}
// Function of all clear
function allClear(){
    document.getElementById("setCode").value = null;
}
//Function for display block and unblock
function isDisplayBlock(id, style){
    document.getElementById(id).style.display = style;
}