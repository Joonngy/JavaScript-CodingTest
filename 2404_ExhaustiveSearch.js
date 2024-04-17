/* --------------Exhaustive Search-------------- */

/* 최소직사각형 */
function solution(sizes) {
    let firstMax = 0;
    let secondMax = 0;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        if (firstMax < sizes[i][0]) firstMax = sizes[i][0];
        if (secondMax < sizes[i][1]) secondMax = sizes[i][1];
    }
    return firstMax * secondMax;
}

const input1 = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
];
const input2 = [[2, 5, 3]];
const input3 = [1, 1, 1, 1, 1, 3, 3];
console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
