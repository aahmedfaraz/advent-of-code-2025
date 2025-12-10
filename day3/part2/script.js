const fs = require('fs');

// Read file synchronously
// const data = fs.readFileSync('sample-input.txt', 'utf-8');
const data = fs.readFileSync('main-input.txt', 'utf-8');

// Split by new lines to get each line as an array element
const banks = data.split(/\r?\n/);
let totalJoltage = 0;

banks.forEach((bank, bankIndex) => {
    let batteries = bank.split('').map(Number);

    let maxBattery = 0;
    let totalDigitsLeft = 11;
    let best12Batteries = []

    while (totalDigitsLeft >= 0) {
        for (let i = maxBattery; i < batteries.length - totalDigitsLeft; i++) {
            if (batteries[i] > batteries[maxBattery]) {
                maxBattery = i;
            }
        }
        best12Batteries.push(batteries[maxBattery]);
        maxBattery = maxBattery + 1;
        totalDigitsLeft--;
    }
    const joltage = parseInt(best12Batteries.join(''));
    console.log(`Bank: ${bankIndex + 1}, Joltage: ${joltage}`);
    totalJoltage += joltage;
})

console.log('Total Joltage:', totalJoltage);

// OUTPUT

// Bank: 1, Joltage: 553331123231
// Bank: 2, Joltage: 754311232121
// Bank: 3, Joltage: 977533423335
// Bank: 4, Joltage: 754334223312
// Bank: 5, Joltage: 554222222242
// Bank: 6, Joltage: 977773367565
// Bank: 7, Joltage: 763227264122
// Bank: 8, Joltage: 643332222222
// Bank: 9, Joltage: 665553222244
// Bank: 10, Joltage: 888532322322
// Bank: 11, Joltage: 999989631362
// Bank: 12, Joltage: 877764645344
// Bank: 13, Joltage: 999555555553
// Bank: 14, Joltage: 998648264223
// Bank: 15, Joltage: 653333333333
// Bank: 16, Joltage: 999444444253
// Bank: 17, Joltage: 544444444322
// Bank: 18, Joltage: 877543334324
// Bank: 19, Joltage: 777532742531
// Bank: 20, Joltage: 753553455532
// Bank: 21, Joltage: 988866872255
// Bank: 22, Joltage: 553334222241
// Bank: 23, Joltage: 766655463234
// Bank: 24, Joltage: 999976665544
// Bank: 25, Joltage: 775533223721
// Bank: 26, Joltage: 998885233232
// Bank: 27, Joltage: 988877545232
// Bank: 28, Joltage: 866449122212
// Bank: 29, Joltage: 844112231312
// Bank: 30, Joltage: 999864322981
// Bank: 31, Joltage: 999924765742
// Bank: 32, Joltage: 653222232312
// Bank: 33, Joltage: 886622343222
// Bank: 34, Joltage: 777555533333
// Bank: 35, Joltage: 755222255295
// Bank: 36, Joltage: 993823522333
// Bank: 37, Joltage: 998444367153
// Bank: 38, Joltage: 975544436642
// Bank: 39, Joltage: 555555555345
// Bank: 40, Joltage: 976674589332
// Bank: 41, Joltage: 633332231121
// Bank: 42, Joltage: 776663352423
// Bank: 43, Joltage: 777777777767
// Bank: 44, Joltage: 444333322233
// Bank: 45, Joltage: 444444456789
// Bank: 46, Joltage: 865322842222
// Bank: 47, Joltage: 888887774444
// Bank: 48, Joltage: 888892625243
// Bank: 49, Joltage: 977777765536
// Bank: 50, Joltage: 773222222222
// Bank: 51, Joltage: 955523123113
// Bank: 52, Joltage: 554444443422
// Bank: 53, Joltage: 776632222232
// Bank: 54, Joltage: 998655555476
// Bank: 55, Joltage: 654423232232
// Bank: 56, Joltage: 999223344641
// Bank: 57, Joltage: 555555556789
// Bank: 58, Joltage: 433334221222
// Bank: 59, Joltage: 777666664422
// Bank: 60, Joltage: 877547164222
// Bank: 61, Joltage: 998887777776
// Bank: 62, Joltage: 999999887775
// Bank: 63, Joltage: 999887666666
// Bank: 64, Joltage: 888756122152
// Bank: 65, Joltage: 666333333143
// Bank: 66, Joltage: 999954644468
// Bank: 67, Joltage: 988866556623
// Bank: 68, Joltage: 444444444433
// Bank: 69, Joltage: 665445342225
// Bank: 70, Joltage: 767444424343
// Bank: 71, Joltage: 966544431344
// Bank: 72, Joltage: 765555545222
// Bank: 73, Joltage: 984444424212
// Bank: 74, Joltage: 999877348452
// Bank: 75, Joltage: 866666544356
// Bank: 76, Joltage: 997644441223
// Bank: 77, Joltage: 998735353335
// Bank: 78, Joltage: 999933363483
// Bank: 79, Joltage: 876544443233
// Bank: 80, Joltage: 875554346243
// Bank: 81, Joltage: 986666943424
// Bank: 82, Joltage: 864333334131
// Bank: 83, Joltage: 776663421222
// Bank: 84, Joltage: 665362322243
// Bank: 85, Joltage: 654444444424
// Bank: 86, Joltage: 666666666789
// Bank: 87, Joltage: 755535342342
// Bank: 88, Joltage: 767332373325
// Bank: 89, Joltage: 876446436446
// Bank: 90, Joltage: 999997644832
// Bank: 91, Joltage: 669424232331
// Bank: 92, Joltage: 876722212423
// Bank: 93, Joltage: 988875544362
// Bank: 94, Joltage: 888766586225
// Bank: 95, Joltage: 999976655555
// Bank: 96, Joltage: 555544333432
// Bank: 97, Joltage: 988523232522
// Bank: 98, Joltage: 987533695414
// Bank: 99, Joltage: 988664442242
// Bank: 100, Joltage: 555553333332
// Bank: 101, Joltage: 966554414355
// Bank: 102, Joltage: 997777731344
// Bank: 103, Joltage: 844423222122
// Bank: 104, Joltage: 666444444334
// Bank: 105, Joltage: 987347384823
// Bank: 106, Joltage: 998866666666
// Bank: 107, Joltage: 654431122132
// Bank: 108, Joltage: 744442222222
// Bank: 109, Joltage: 877745321213
// Bank: 110, Joltage: 999842422812
// Bank: 111, Joltage: 765552243213
// Bank: 112, Joltage: 955442235423
// Bank: 113, Joltage: 653222222232
// Bank: 114, Joltage: 999866965845
// Bank: 115, Joltage: 555553333322
// Bank: 116, Joltage: 554444444444
// Bank: 117, Joltage: 999886666336
// Bank: 118, Joltage: 777444447222
// Bank: 119, Joltage: 977754445313
// Bank: 120, Joltage: 877777442342
// Bank: 121, Joltage: 667434323431
// Bank: 122, Joltage: 998887683432
// Bank: 123, Joltage: 988766657722
// Bank: 124, Joltage: 554325432232
// Bank: 125, Joltage: 999999966843
// Bank: 126, Joltage: 766666666666
// Bank: 127, Joltage: 998866666679
// Bank: 128, Joltage: 998665554324
// Bank: 129, Joltage: 999999988796
// Bank: 130, Joltage: 644444423212
// Bank: 131, Joltage: 654434221233
// Bank: 132, Joltage: 888888888889
// Bank: 133, Joltage: 977777767257
// Bank: 134, Joltage: 555422223224
// Bank: 135, Joltage: 444443232112
// Bank: 136, Joltage: 999866433742
// Bank: 137, Joltage: 997374247734
// Bank: 138, Joltage: 876666454353
// Bank: 139, Joltage: 764445533465
// Bank: 140, Joltage: 999333333235
// Bank: 141, Joltage: 666666532231
// Bank: 142, Joltage: 977647455355
// Bank: 143, Joltage: 999998877776
// Bank: 144, Joltage: 888875434333
// Bank: 145, Joltage: 966654444444
// Bank: 146, Joltage: 996623521325
// Bank: 147, Joltage: 544333232332
// Bank: 148, Joltage: 986664353195
// Bank: 149, Joltage: 777777766735
// Bank: 150, Joltage: 592522222323
// Bank: 151, Joltage: 955445431553
// Bank: 152, Joltage: 988888888879
// Bank: 153, Joltage: 666655544333
// Bank: 154, Joltage: 988777843934
// Bank: 155, Joltage: 987664437452
// Bank: 156, Joltage: 977775555555
// Bank: 157, Joltage: 999553475275
// Bank: 158, Joltage: 855444244284
// Bank: 159, Joltage: 987821342332
// Bank: 160, Joltage: 999999999876
// Bank: 161, Joltage: 888888889522
// Bank: 162, Joltage: 999996784635
// Bank: 163, Joltage: 999997799371
// Bank: 164, Joltage: 887757622388
// Bank: 165, Joltage: 999999999959
// Bank: 166, Joltage: 754444444444
// Bank: 167, Joltage: 777777777789
// Bank: 168, Joltage: 885612222342
// Bank: 169, Joltage: 985443433313
// Bank: 170, Joltage: 877666446332
// Bank: 171, Joltage: 888544493325
// Bank: 172, Joltage: 777793346443
// Bank: 173, Joltage: 877942133376
// Bank: 174, Joltage: 977773333333
// Bank: 175, Joltage: 877557132525
// Bank: 176, Joltage: 954444422532
// Bank: 177, Joltage: 866555543351
// Bank: 178, Joltage: 855545451333
// Bank: 179, Joltage: 974444713221
// Bank: 180, Joltage: 977776441733
// Bank: 181, Joltage: 977574422232
// Bank: 182, Joltage: 755544444537
// Bank: 183, Joltage: 888888888755
// Bank: 184, Joltage: 888884553362
// Bank: 185, Joltage: 888856344336
// Bank: 186, Joltage: 999999547463
// Bank: 187, Joltage: 755543334532
// Bank: 188, Joltage: 999855424522
// Bank: 189, Joltage: 884335461713
// Bank: 190, Joltage: 988887752254
// Bank: 191, Joltage: 888755556483
// Bank: 192, Joltage: 875632473343
// Bank: 193, Joltage: 977421342226
// Bank: 194, Joltage: 877555555562
// Bank: 195, Joltage: 653223232212
// Bank: 196, Joltage: 877777776666
// Bank: 197, Joltage: 887776655743
// Bank: 198, Joltage: 666222242123
// Bank: 199, Joltage: 766666666654
// Bank: 200, Joltage: 999987745426
// Total Joltage: 169709990062889