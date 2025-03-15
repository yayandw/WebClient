const args: any = process.argv.slice(2);

function centiToKiloMeter(centi: number): number {
    return centi / 100 / 1000;
}

export {}

console.log("output: " + centiToKiloMeter(args[0]) + "km");