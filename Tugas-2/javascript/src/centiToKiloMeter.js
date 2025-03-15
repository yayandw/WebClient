const args = process.argv.slice(2);

function centiToKiloMeter(centi) {
    return centi / 100 / 1000;
}

console.log("output: " + centiToKiloMeter(args[0]) + "km");