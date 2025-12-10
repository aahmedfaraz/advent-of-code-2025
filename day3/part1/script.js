const fs = require('fs');

// Read file synchronously
// const data = fs.readFileSync('sample-input.txt', 'utf-8');
const data = fs.readFileSync('main-input.txt', 'utf-8');

// Split by new lines to get each line as an array element
const banks = data.split(/\r?\n/);
let totalJoltage = 0;

banks.forEach((bank) => {
    const batteries = bank.split('').map(Number);
    const maxBattery = Math.max(...batteries);
    const maxBatteryIndex = batteries.indexOf(maxBattery);
    const batteriesOnLeft = batteries.slice(0, maxBatteryIndex);
    const batteriesOnRight = batteries.slice(maxBatteryIndex + 1);
    let joltage1 = 0, joltage2 = 0;
    if (batteriesOnLeft.length > 0) {
        const maxBatteryLeft = Math.max(...batteriesOnLeft);
        joltage1 = parseInt(`${maxBatteryLeft}${maxBattery}`);
    }
    if (batteriesOnRight.length > 0) {
        const maxBatteryRight = Math.max(...batteriesOnRight);
        joltage2 = parseInt(`${maxBattery}${maxBatteryRight}`);
    }
    const maxJoltage = Math.max(joltage1, joltage2);
    totalJoltage += maxJoltage;
})

console.log('Total Joltage:', totalJoltage);

// OUTPUT

// Total Joltage: 17113