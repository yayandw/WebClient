const args: any = process.argv.slice(2);

function isEven(number: number): boolean {
    return number % 2 === 0;
}

export {}

console.log("output: isEven: " + isEven(args[0]));