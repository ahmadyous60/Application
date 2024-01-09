function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

    var celsiusTemp = 60;
    var fahrenheitTemp = 45;

    var convertedFahrenheit = celsiusToFahrenheit(celsiusTemp);
    var convertedCelsius = fahrenheitToCelsius(fahrenheitTemp);

    document.getElementById('demo').innerHTML = celsiusTemp + "°C is " + convertedFahrenheit.toFixed(2) + "°F";
    document.getElementById('demo1').innerHTML = fahrenheitTemp + "°F is " + convertedCelsius.toFixed(2) + "°C";
