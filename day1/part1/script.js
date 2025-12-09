const fs = require('fs');

// Read file synchronously
// const data = fs.readFileSync('sample-input.txt', 'utf-8');
const data = fs.readFileSync('main-input.txt', 'utf-8');

// Split by new lines to get each line as an array element
const lines = data.split(/\r?\n/);

let password = 0;
let currentArrowPosition = 50;

lines.forEach((line) => {
    const direction = line.charAt(0);
    const amount = parseInt(line.slice(1));
    if (direction === "L") {
        currentArrowPosition -= amount;
    } else if (direction === "R") {
        currentArrowPosition += amount;
    }

    if (currentArrowPosition === 0 || Math.abs(currentArrowPosition) % 100 === 0) {
        password ++;
    }
})

console.log("Final Password: ", password)

// Output
// Final Password:  1007