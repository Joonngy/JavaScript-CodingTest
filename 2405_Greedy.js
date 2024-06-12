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

/* 조이스틱 */
function solution(name) {
    let sum = 0;
    // UP / DOWN Direction
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    // LEFT / RIGHT Direction
    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            let right = i;
            let left = name.length - j;

            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
        }
    }

    return sum + minMove;
}

const input1 = 'BBABAAB';
const input2 = [1, 3, 5, 7];
const input3 = [1, 3, 5, 7];

console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
