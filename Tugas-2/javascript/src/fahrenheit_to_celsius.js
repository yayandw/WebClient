const args = process.argv.slice(2);

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

console.log("output: " + fahrenheitToCelsius(args[0]).toFixed(2) + "°C");