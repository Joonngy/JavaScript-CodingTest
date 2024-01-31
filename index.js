/* --------------Stack/Queue-------------- */
/* 같은 숫자는 싫어 */
function solution(arr) {
    var answer = [];
    arr.forEach(v => {
        if (answer[answer.length - 1] === v && answer.length > 0) return;
        else answer.push(v);
    })
    return answer;
}

/* 기능개발 */
function solution(progresses, speeds) {
    var answer = [];
    var strLength = progresses.length;
    while (progresses.length > 0) {
        progresses = progresses.map((v, i) => v += speeds[i])
        let functionCount = 0;

        for(p of progresses) {
            if(p >= 100) functionCount++;
            else break;
        }
        
        if (functionCount > 0) {
            progresses.splice(0, functionCount);
            speeds.splice(0,functionCount);
            answer.push(functionCount);
        }
    }
    return answer;
}

const input1 = [95, 96, 97];
const input2 = [5, 3, 1];
const input3 = 1;
// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
