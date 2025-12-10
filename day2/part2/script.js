const fs = require('fs');

// Read file synchronously
// const data = fs.readFileSync('sample-input.txt', 'utf-8');
const data = fs.readFileSync('main-input.txt', 'utf-8');

// Split data by commas to get individual ranges
const ranges = data.split(',');
let invalidIds = [];

ranges.forEach((range) => {
    const [start, end] = range.split('-').map(Number);
    for (let id = start; id <= end; id++) {
        const idStr = id.toString();
        let divisor = Math.floor(idStr.length / 2);
        const resultsFromAllDivisions = [];
        while(divisor > 0) {
            if (idStr.length % divisor !== 0) {
                divisor--;
                continue;
            }
            
            let tempIdStr = idStr;
            const firstPart = tempIdStr.slice(0, divisor);
            tempIdStr = tempIdStr.slice(divisor);
            let isInvalid = true;

            for (let i = 0; i < tempIdStr.length; i += divisor) {
                const nextPart = tempIdStr.slice(i, i + divisor);
                if (firstPart !== nextPart) {
                    isInvalid = false;
                    break;
                }
            }

            resultsFromAllDivisions.push(isInvalid);
            divisor--;
        }
        const isInvalid = resultsFromAllDivisions.includes(true);
        if (isInvalid) {
            invalidIds.push(id);
        }
    }
});

console.log('Invalid IDs:', invalidIds);
console.log('Total Invalid IDs:', invalidIds.length);
console.log('Sum Invalid IDs:', invalidIds.map(Number).reduce((a, b) => a + b, 0));

// OUTPUT

// Invalid IDs: [
//   200200, 201201, 202020, 202202,  203203, 204204, 205205,
//   206206, 207207, 208208, 209209,  210210, 211211, 212121,
//   212212, 213213, 214214, 215215,  216216, 217217, 218218,
//   219219, 220220, 221221, 222222,  223223, 224224, 225225,
//   226226, 227227, 228228, 229229,  230230, 231231, 232232,
//   232323, 233233, 234234, 235235,  236236, 237237, 238238,
//   239239, 240240, 241241, 242242,  242424, 243243, 244244,
//   245245, 246246, 247247, 248248,  249249, 250250, 251251,
//   252252, 252525, 253253, 254254, 7777777,  22222, 963963,
//   964964, 965965, 966966, 967967,  968968, 969696, 969969,
//   970970, 971971, 972972, 973973,  974974, 975975, 976976,
//   977977, 978978, 979797, 979979,  980980, 981981, 982982,
//   983983, 984984, 985985, 986986,  987987, 988988, 989898,
//   989989, 990990, 991991, 992992,  993993, 994994, 995995,
//   996996, 997997,
//   ... 533 more items
// ]
// Total Invalid IDs: 633
// Sum Invalid IDs: 11323661261