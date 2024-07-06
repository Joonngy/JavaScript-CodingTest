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

/* 네트워크 */
function solution(n, computers) {
    let answer = 0;
    let history = {};

    const dfs = (index, set) => {
        for (let i = 0; i < set.length; i++) {
            if (set[i] === 0 || history[i] === 1) continue;
            history[i] = 1;
            dfs(i, computers[i]);
        }
    };

    for (let i = 0; i < computers.length; i++) {
        if (history[i]) continue;
        dfs(i, computers[i]);
        answer++;
    }

    return answer;
}

/* 게임 맵 최단거리 */
// DFS - Recursive (효율성 문제 maybe stack으로?)
function solution(maps) {
    let answer = 999999;

    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const visited = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));

    let count = 1;
    const dfs = (rIndex, cIndex) => {
        for (let i = 0; i <= n; i++) {
            if (i >= rIndex - 1 && i <= rIndex + 1) {
                for (let j = 0; j <= m; j++) {
                    if (j >= cIndex - 1 && j <= cIndex + 1) {
                        if (i < rIndex && j != cIndex) continue;
                        if (i > rIndex && j != cIndex) continue;

                        console.log(i, j);

                        if (maps[i][j] === 0 || visited[i][j] === 1) continue;

                        count++;
                        visited[i][j] = 1;
                        if (i === n && j === m) {
                            if (answer > count) answer = count;
                        }

                        dfs(i, j);

                        visited[i][j] = 0;
                        count--;
                    }
                }
            }
        }
    };
    visited[0][0] = 1;
    dfs(0, 0);

    return answer === 999999 ? -1 : answer;
}

//BFS
function solution(maps) {
    let answer = 0;
    let n = maps.length - 1;
    let m = maps[0].length - 1;
    let queue = [[0, 0]];

    let visited = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(false));

    while (queue.length) {
        answer++;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();

            if (visited[y][x]) continue;
            maps[y][x] = 0;

            visited[y][x] = true;

            if (y === n && x === m) return answer;

            if (y < n && maps[y + 1][x] === 1) queue.push([y + 1, x]);
            if (x < m && maps[y][x + 1] === 1) queue.push([y, x + 1]);
            if (y > 0 && maps[y - 1][x] === 1) queue.push([y - 1, x]);
            if (x > 0 && maps[y][x - 1] === 1) queue.push([y, x - 1]);
        }
    }

    return -1;
}

const input1 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
];
const input2 = [
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 1],
];
const input3 = [1, 3, 5, 7];

console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
