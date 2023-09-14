// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Get input elements
const celsiusInput = document.querySelector('input[name="celcius"]');
const fahrenheitInput = document.querySelector('input[name="fahrenheit"]');
const kelvinInput = document.querySelector('input[name="kelvin"]');

// Add event listeners for input changes
celsiusInput.addEventListener('input', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
    kelvinInput.value = celsiusToKelvin(celsiusValue).toFixed(2);
});

fahrenheitInput.addEventListener('input', () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
    kelvinInput.value = fahrenheitToKelvin(fahrenheitValue).toFixed(2);
});

kelvinInput.addEventListener('input', () => {
    const kelvinValue = parseFloat(kelvinInput.value);
    celsiusInput.value = kelvinToCelsius(kelvinValue).toFixed(2);
    fahrenheitInput.value = kelvinToFahrenheit(kelvinValue).toFixed(2);
});

// Function to clear all input fields
function clearInputs() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
}

// Get the "All Clear" button and add a click event listener
const clearButton = document.querySelector('.button button');
clearButton.addEventListener('click', clearInputs);
