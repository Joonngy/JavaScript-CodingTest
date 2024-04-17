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

/* 모의고사 */
function solution(answers) {
    const answer1 = [1, 2, 3, 4, 5];
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let index = 0;
    const correctAnswer = [0, 0, 0];
    while (index < answers.length) {
        if (answer1[index % answer1.length] === answers[index]) correctAnswer[0]++;
        if (answer2[index % answer2.length] === answers[index]) correctAnswer[1]++;
        if (answer3[index % answer3.length] === answers[index]) correctAnswer[2]++;
        index++;
    }

    index = 0;
    const maxValue = Math.max(correctAnswer[0], correctAnswer[1], correctAnswer[2]);
    const returnValue = [];
    while (index < correctAnswer.length) {
        if (correctAnswer[index] === maxValue) returnValue.push(index + 1);
        index++;
    }
    return returnValue;
}

const input1 = [1, 3, 2, 4, 2];
const input2 = [[2, 5, 3]];
const input3 = [1, 1, 1, 1, 1, 3, 3];
console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
