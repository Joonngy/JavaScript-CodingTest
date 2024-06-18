/* 타켓 넘버 */
function solution(numbers, target) {
    var answer = 0;
    let minus = -1;

    const add = numbers => {
        let total = 0;
        for (const num of numbers) {
            total += num;
        }
        return total;
    };

    const dfs = (numbers, index) => {
        if (index > numbers.length) return;

        const result = add(numbers);
        if (result === target) answer++;
        for (let i = index; i < numbers.length; i++) {
            const editedNumbers = [...numbers];
            editedNumbers[i] = editedNumbers[i] * minus;
            dfs(editedNumbers, ++index);
        }

        return;
    };

    dfs(numbers, 0);

    return answer;
}

const input1 = [1, 1, 1, 1, 1];
const input2 = 3;
const input3 = [1, 3, 5, 7];

// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
