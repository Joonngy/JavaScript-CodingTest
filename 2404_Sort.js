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

/* 가장 큰 수 */
function solution(numbers) {
    const answer = numbers
        .map(v => v.toString())
        .sort((a, b) => b + a - (a + b))
        .join('');
    // Number가 지원하는 자리수가 제한적이기 때문에 아래 공식은 성립하지 않음
    // return Number(answer).toString();
    return answer[0] === '0' ? '0' : answer;
}

/* H-Index */
function solution(citations) {
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i) {
            return i;
        }
    }

    return citations.length
}

const input1 = [0, 0, 0, 0, 0];
const input2 = [[2, 5, 3]];
const input3 = [1, 1, 1, 1, 1, 3, 3];
console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
