const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

celsiusInput.addEventListener("input", function() {
    let cTemp = parseFloat(celsiusInput.value);
    if (celsiusInput.value === "") {
        fahrenheitInput.value = "";
    } else {
        let fTemp = (cTemp * 9/5) + 32;
        fahrenheitInput.value = parseFloat(fTemp.toFixed(2));
    }
});

fahrenheitInput.addEventListener("input", function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    if (fahrenheitInput.value === "") {
        celsiusInput.value = "";
    } else {
        let cTemp = (fTemp - 32) * 5/9;
        celsiusInput.value = parseFloat(cTemp.toFixed(2));
    }
});

function resetForm() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
}

function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
}