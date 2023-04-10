function convertTemperature() {
    // Get input values
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    // Convert Celsius to Fahrenheit
    var celsiusValue = celsiusInput.value;
    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    // Display result in Fahrenheit input field
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function resetForm() {
    // Reset input fields
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}
