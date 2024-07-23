/* 입국 심사 */
function solution(n, times) {
    let answer = 0;
    const checker = times.length;
    const arr = Array.from({ length: checker }).fill(0);
    while (n > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= answer) {
                arr[i] += times[i];
                n--;
            }
        }
        answer = Math.min(...arr);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] += times[i];
    }
    answer = Math.min(...arr);
    return answer;
}

function solution(n, times) {
    let left = 1;
    let right = Number.MAX_SAFE_INTEGER;
    let mid = Math.floor((left + right) / 2);
    while (left < right) {
        let people = times.reduce((a, b) => a + Math.floor(mid / b), 0);
        if (people >= n) right = mid;
        else left = mid + 1;
        mid = Math.floor((left + right) / 2);
    }
    return mid;
}

const input1 = 60000000;
const input2 = [10000000, 10];
const input3 = 7;
const input4 = 6;
const input5 = 1;

// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
// console.log(solution(input1, input2, input3, input4, input5));
