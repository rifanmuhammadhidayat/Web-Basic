function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;
        if (result === undefined || result === null) {
            display.value = "isi dulu";
        }
    } catch (error) {
        display.value = "isi dulu";
    }
}