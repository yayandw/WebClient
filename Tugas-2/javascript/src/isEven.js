const args = process.argv.slice(2);

function isEven(number) {
    return number % 2 === 0;
}

console.log("output: isEven: " + isEven(args[0]));