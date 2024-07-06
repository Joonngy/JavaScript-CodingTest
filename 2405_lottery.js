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
            // console.log(arrayFromSet);
            return count;
        }
    }
}
expectedSeries = [ 6, 14, 25, 33, 40, 44 ];

let total = 0;
let repeat = 10;
for (let i = 0; i < repeat; i++) {
    total += getTryCount(expectedSeries);
}
console.log(total);
console.log(getSampleNumber(total / 10));


/* 선택 번호
24/6/29 -> [ 4, 5, 9, 11, 37, 40 ]
[ 2, 12, 17, 22, 36, 41 ]
[ 11, 22, 25, 27, 30, 41 ]
[ 10, 17, 21, 24, 29, 42 ]
[ 8, 28, 29, 37, 43, 44 ]
 [ 11, 13, 18, 29, 34, 41 ]

24/6/22 -> [ 6, 14, 25, 33, 40, 44 ]
[ 2, 12, 17, 22, 36, 40 ]
[ 11, 22, 25, 27, 30, 41 ]
[ 10, 17, 21, 24, 29, 42 ]
[ 8, 28, 29, 37, 43, 44 ]
[ 11, 13, 18, 29, 34, 40 ]

24/6/15 -> [ 3, 8, 17, 30, 33, 34 ]
[ 8, 11, 17, 30, 33, 38 ] - 4등
[ 7, 20, 29, 35, 39, 41 ]
[ 2, 14, 23, 31, 42, 43 ]
[ 3, 7, 21, 23, 24, 32 ]
[ 5, 14, 16, 19, 30, 35 ]

[ 7, 20, 29, 35, 39, 41 ]
[ 14, 15, 25, 32, 34, 40 ]

24/6/8 [ 13, 19, 21, 24, 34, 35 ]
24/6/1 [ 3, 6, 21, 30, 34, 35 ]
24/5/25 [ 6, 24, 31, 32, 38, 44 ]
*/

/* History
[ 8, 11, 17, 30, 33, 38 ] -> 6/15 4등 
[ 6, 14, 24, 25, 41, 44 ] -> 6/22 4등
[ 7, 20, 29, 35, 39, 41 ]
[ 9, 19, 21, 22, 41, 44 ]
[ 7, 12, 23, 26, 32, 45 ]
[ 3, 16, 17, 18, 33, 43 ]
[ 14, 23, 35, 36, 39, 42 ]
[ 18, 21, 28, 33, 44, 45 ]
[ 11, 22, 25, 27, 30, 41 ]
[ 10, 14, 16, 22, 26, 45 ]
[ 9, 18, 23, 38, 41, 44 ]
[ 3, 7, 21, 23, 24, 32 ]
[ 2, 12, 17, 22, 36, 40 ]
[ 14, 15, 25, 32, 34, 40 ]
[ 1, 3, 15, 24, 31, 42 ]
[ 10, 17, 21, 24, 29, 42 ]
[ 8, 28, 29, 37, 43, 44 ]
[ 11, 13, 18, 29, 34, 40 ]
*/