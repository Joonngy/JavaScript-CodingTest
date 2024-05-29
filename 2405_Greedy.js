/* 체육복 */
function solution(n, lost, reserve) {
    for (let l = lost.length - 1; l >= 0; l--) {
        if (reserve.includes(lost[l])) {
            reserve.splice(reserve.indexOf(lost[l]), 1);
            lost.splice(l, 1);
        }
    }

    let answer = n - lost.length;

    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    for (const l of lost) {
        for (let r = 0; r < reserve.length; r++) {
            if (Math.abs(l - reserve[r]) === 1) {
                reserve.splice(r, 1);
                answer++;
                break;
            }
        }
    }

    return answer;
}

const input1 = 7;
const input2 = [1, 3, 5, 7];
const input3 = [1, 3, 5, 7];

// console.log(solution(input1));
// console.log(solution(input1, input2));
console.log(solution(input1, input2, input3));
