function getSampleNumber(count) {
    for (let i = 0; i < count; i++) {
        const map = new Set();
        while (map.size < 6) {
            map.add(Math.floor((Math.random() * 10000) % 45) + 1);
        }
        const arrayFromSet = Array.from(map);
        arrayFromSet.sort((a, b) => a - b);
        // console.log(arrayFromSet);
        return arrayFromSet;
    }
}
/*
[ 7, 20, 29, 35, 39, 41 ]
[ 9, 19, 21, 22, 41, 44 ]
[ 7, 12, 23, 26, 32, 45 ]
[ 14, 15, 25, 32, 34, 40 ]

[ 3, 16, 17, 18, 33, 43 ]
[ 8, 11, 17, 30, 33, 38 ]
[ 14, 23, 35, 36, 39, 42 ]
[ 18, 21, 28, 33, 44, 45 ]
*/

function getTryCount(expectedSeries) {
    let count = 0;
    while (true) {
        count++;
        const map = new Set();
        while (map.size < 6) {
            map.add(Math.floor((Math.random() * 10000) % 45) + 1);
        }
        const arrayFromSet = Array.from(map);
        arrayFromSet.sort((a, b) => a - b);

        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        if (arraysEqual(arrayFromSet, expectedSeries)) {
            console.log(count);
            console.log(arrayFromSet);
            return count;
        }
    }
}
expectedSeries = [3, 6, 21, 30, 34, 35];
const count = getTryCount(expectedSeries);
console.log(getSampleNumber(count));
/*
[ 11, 22, 25, 27, 30, 41 ]
[ 10, 14, 16, 22, 26, 45 ]
[ 9, 18, 23, 38, 41, 44 ]
[ 3, 7, 21, 23, 24, 32 ]
[ 2, 12, 17, 22, 36, 40 ]
[ 6, 14, 24, 25, 41, 44 ]
[ 1, 3, 15, 24, 31, 42 ]
*/
console.log(getSampleNumber(21403894));