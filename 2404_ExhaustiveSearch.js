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

/* 소수 찾기 */
// 재귀
function solution1(numbers) {
    const numSet = new Set();

    const isPrime = num => {
        if (num <= 1) return false;

        let i = 2;
        while (i <= num / 2) {
            if (num % i++ === 0) return false;
        }

        return true;
    };

    const MakeNumber = (numSet, cur, arr) => {
        if (arr.length <= 0) return;

        const clone = arr.slice().reverse();
        clone.forEach((v, i, arr) => {
            const sliced = arr.pop();
            const num = Number(cur + sliced);
            if (isPrime(num)) {
                numSet.add(num);
            }

            MakeNumber(numSet, num, arr);
            console.log(i, num);
            arr.unshift(sliced);
        });
    };

    MakeNumber(numSet, '', numbers.split(''));

    return numSet.size;
}

// BFS
function solution2(numbers) {
    const stack = [];

    const isPrime = n => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const bfs = (num, idx) => {
        if (num.length === numbers.length) return;

        for (let i = 0; i < numbers.length; i += 1) {
            if (idx.indexOf(i) !== -1) continue;

            const newNum = num + numbers[i];

            if (stack.indexOf(parseInt(newNum)) === -1 && parseInt(newNum) >= 2) {
                if (isPrime(parseInt(newNum))) {
                    stack.push(parseInt(newNum));
                }
            }
            bfs(newNum, [...idx, i]);
            console.log(i, newNum);
        }
    };

    bfs('', []);

    return stack.length;
}

// DFS
function solution3(numbers) {
    let set = new Set();

    const isPrime = n => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const dfs = (set, fixed, arr) => {
        if (arr.length <= 0) return;

        for (let i = 0; i < arr.length; i++) {
            let newFixed = fixed + arr[i];
            let copyArr = [...arr];
            copyArr.splice(i, 1);

            if (isPrime(parseInt(newFixed))) {
                set.add(parseInt(newFixed));
            }

            dfs(set, newFixed, copyArr);
            console.log(i, newFixed);
        }
    };
    dfs(set, '', numbers.split(''));

    return set.size;
}

/* 카펫 */
function solution(brown, yellow) {
    const totalNum = brown + yellow;

    let index = 1;
    while (index < totalNum / 2) {
        if (totalNum % index === 0) {
            const big = totalNum / index;
            const small = index;

            if ((big - 2) * (small - 2) === yellow) return [big, small];
        }
        index++;
    }
}

/* 던젼 피로도 */
// BFS
function solution(k, dungeons) {
    var answer = -1;

    const dfs = (curK, count, arr) => {
        if (arr.length <= 0) return;

        for (let i = 0; i < arr.length; i++) {
            const copyArr = [...arr];
            copyArr.splice(i, 1);

            if (curK >= arr[i][0]) {
                dfs(curK - arr[i][1], count + 1, copyArr);
                answer = Math.max(answer, count);
            }
        }
    };

    dfs(k, 1, dungeons);

    return answer;
}
// Stack
function solution(k, dungeons) {
    let answer = -1;
    const stack = [];

    stack.push({ curK: k, count: 1, arr: dungeons });

    while (stack.length > 0) {
        const { curK, count, arr } = stack.pop();

        if (arr.length <= 0) continue;

        for (let i = 0; i < arr.length; i++) {
            const copyArr = [...arr];
            copyArr.splice(i, 1);
            
            console.log(i, count, curK, JSON.stringify(copyArr));
            if (curK >= arr[i][0]) {
                stack.push({ curK: curK - arr[i][1], count: count + 1, arr: copyArr });
                answer = Math.max(answer, count);
            }
        }
    }

    return answer;
}


const input1 = 80;
const input2 = [
    [80, 20],
    [50, 40],
    [30, 10],
];
const input3 = [1, 1, 1, 1, 1, 3, 3];
// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
