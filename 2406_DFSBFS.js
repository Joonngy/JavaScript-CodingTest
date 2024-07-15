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

/* 단어 변환 */
function solution(begin, target, words) {
    let answer = 100;

    if (!words.includes(target)) return 0;

    const countDiff = (ori, dest) => {
        let count = 0;
        const word1 = ori.split('');
        const word2 = dest.split('');

        for (let i = 0; i < word1.length; i++) {
            count = word1[i] !== word2[i] ? count + 1 : count;
        }

        return count;
    };

    const dfs = (wordSet, curWord, curLevel) => {
        if (wordSet.length === 0) return;

        for (let i = 0; i < wordSet.length; i++) {
            if (countDiff(curWord, wordSet[i]) > 1) {
                continue;
            }
            const newSet = [...wordSet];
            newSet.splice(i, 1);
            const newLevel = curLevel + 1;
            console.log(i, wordSet[i], newSet, newLevel);

            dfs(newSet, wordSet[i], newLevel);
            if (answer > newLevel && wordSet[i] === target) answer = newLevel;
        }
    };

    dfs(words, begin, 0);

    return answer === 100 ? 0 : answer;
}

/* 아이템 줍기 */
function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const doubRectangle = rectangle.map(points => points.map(point => point * 2));
    const outline = Array.from({ length: 103 }, () => Array(103).fill(0));

    doubRectangle.forEach(([x1, y1, x2, y2]) => {
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                if (x === x1 || x === x2 || y === y1 || y === y2) {
                    if (outline[x][y] === 0) outline[x][y] = 1;
                } else {
                    outline[x][y] = 2;
                }
            }
        }
    });

    const queue = [[characterX, characterY, 0]];
    outline[characterX][characterY] = 0;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    while (queue.length > 0) {
        const [post_x, post_y, cnt] = queue.shift();

        if (post_x === itemX && post_y === itemY) return cnt / 2;

        for (let d = 0; d < 4; d++) {
            const nx = post_x + dx[d];
            const ny = post_y + dy[d];
            if (outline[nx][ny] === 1) {
                queue.push([nx, ny, cnt + 1]);
                outline[nx][ny] = 0;
            }
        }
    }

    return 0;
}

/* 여행 경로 */
function solution(tickets) {
    const totalSize = tickets.length + 1;
    let answer = [];
    const dfs = (currentTickets, currentAirport, list) => {
        if (currentTickets.length === 0) return;

        for (let i = 0; i < currentTickets.length; i++) {
            const newTickets = [...currentTickets];
            const [[depart, arrival]] = newTickets.splice(i, 1);
            const newList = [...list];

            if (depart !== currentAirport) continue;
            else newList.push(arrival);
            console.log(currentAirport, `${depart}-${arrival}`, JSON.stringify(currentTickets));
            dfs(newTickets, arrival, newList);

            if (newList.length === totalSize) {
                if (answer.length === 0) answer = [...newList];
                else if (newList.join(',') < answer.join(',')) answer = [...newList];
            }
        }1
    };

    dfs(tickets, "ICN", ["ICN"]);

    return answer;
}

const input1 = [
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
];
const input2 = 9;
const input3 = 7;
const input4 = 6;
const input5 = 1;

console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
// console.log(solution(input1, input2, input3, input4, input5));
