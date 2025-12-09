const fs = require('fs');

// Read file synchronously
// const data = fs.readFileSync('sample-input.txt', 'utf-8');
const data = fs.readFileSync('main-input.txt', 'utf-8');

// Split by new lines to get each line as an array element
const lines = data.split(/\r?\n/);

let password = 0;
let currentArrowPosition = 50;

lines.forEach((line) => {
    const direction = line.charAt(0); // L or R

    // Normalize Position
    if (currentArrowPosition < 0) {
        currentArrowPosition = 100 - Math.abs(currentArrowPosition % 100); // 0 to 99
    } else if (currentArrowPosition > 99) {
        currentArrowPosition = Math.abs(currentArrowPosition % 100); // 0 to 99
    }

    // Normalize Amount
    let amount = parseInt(line.slice(1)); // 0 or 25 or 98 or 120 or 1025 etc
    let normalizedAmount = amount % 100; // 0 or 25 or 98 or 20 or 25 etc

    // Calculate Extra Clicks
    let extraClicks = parseInt(amount / 100); // 0 or 0 or 0 or 1 or 10 etc
    password += extraClicks;

    // Calculate distance to 0 position from both directions
    const d0L = currentArrowPosition === 0 ? 100 : currentArrowPosition;
    const d0R = currentArrowPosition === 0 ? 100 : 100 - d0L;

    // Move Arrow and Check if crossed 0 position
    if (direction === "L") {
        if (normalizedAmount >= d0L) {
            password ++;
        }
        currentArrowPosition -= normalizedAmount;
    } else if (direction === "R") {
        if (normalizedAmount >= d0R) {
            password ++;
        }
        currentArrowPosition += normalizedAmount;
    }
})

console.log("Final Password: ", password)

// Output
// Final Password:  5820