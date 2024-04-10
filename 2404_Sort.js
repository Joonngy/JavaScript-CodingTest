/* --------------Sort-------------- */

/* K번째 수 */
function solution(array, commands) {
    let answer = [];

    while (commands.length > 0) {
        const command = commands.shift();
        const temp = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
        answer.push(temp[command[2] - 1]);
    }
    return answer;
}

const input1 = [1, 5, 2, 6, 3, 7, 4];
const input2 = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];
const input3 = [1, 1, 1, 1, 1, 3, 3];
// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
