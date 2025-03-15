const args: any = process.argv.slice(2);

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
}

export {}

console.log("output: " + fahrenheitToCelsius(args[0]).toFixed(2) + "°C");