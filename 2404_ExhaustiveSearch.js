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
// DFS - Recursive
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
// BFS - Stack
function solution1(k, dungeons) {
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

/* 전력망을 둘로 나누기 */
// dfs - recursive
function solution(n, wires) {
    const ansList = [];
    const graph = Array.from({ length: n + 1 }, () => []);
    let visited = new Array(n + 1).fill(0);

    const dfs = (here, graph, visited) => {
        visited[here] = 1;
        let node = 1;
        for (const g of graph[here]) {
            if (visited[g] === 0) {
                node += dfs(g, graph, visited);
            }
        }
        return node;
    };

    for (const w of wires) {
        graph[w[0]].push(w[1]);
        graph[w[1]].push(w[0]);
    }

    // graph.forEach((v, i) => {
    //     console.log(`${i} : ${v}`);
    // });

    for (const w of wires) {
        visited = new Array(n + 1).fill(0);

        const index1 = graph[w[0]].indexOf(w[1]);
        if (index1 !== -1) graph[w[0]].splice(index1, 1);
        const index2 = graph[w[1]].indexOf(w[0]);
        if (index2 !== -1) graph[w[1]].splice(index2, 1);

        const group1 = dfs(w[0], graph, visited);
        const group2 = dfs(w[1], graph, visited);
        console.log(`${group1}, ${group2}`);
        ansList.push(Math.abs(group1 - group2));

        graph[w[0]].push(w[1]);
        graph[w[1]].push(w[0]);
    }

    let min = Infinity;
    for (const a of ansList) {
        if (min >= a) {
            min = a;
        }
    }
    return min;
}

// bfs - stack
function solution1(n, wires) {
    const ansList = [];
    const graph = Array.from({ length: n + 1 }, () => []);
    let visitedGroup1 = new Array(n + 1).fill(0);
    let visitedGroup2 = new Array(n + 1).fill(0);

    for (const w of wires) {
        graph[w[0]].push(w[1]);
        graph[w[1]].push(w[0]);
    }

    const bfs = (queue, graph, visited) => {
        let node = 0;
        while (queue.length > 0) {
            let here = queue.shift();
            visited[here] = 1;
            node++;

            for (const g of graph[here]) {
                if (visited[g] === 0) {
                    queue.push(g);
                }
            }
        }
        return node;
    };

    for (const w of wires) {
        visitedGroup1 = new Array(n + 1).fill(0);
        visitedGroup2 = new Array(n + 1).fill(0);

        const index1 = graph[w[0]].indexOf(w[1]);
        if (index1 !== -1) graph[w[0]].splice(index1, 1);
        const index2 = graph[w[1]].indexOf(w[0]);
        if (index2 !== -1) graph[w[1]].splice(index2, 1);

        const group1 = bfs([w[0]], graph, visited);
        const group2 = bfs([w[1]], graph, visited);
        // console.log(`${group1}, ${group2}`);
        ansList.push(Math.abs(group1 - group2));

        graph[w[0]].push(w[1]);
        graph[w[1]].push(w[0]);
    }

    let min = Infinity;
    for (const a of ansList) {
        if (min >= a) {
            min = a;
        }
    }
    return min;
}

// union-find
function solution2(n, wires) {
    let answer = Infinity;

    // 각 노드의 부모 노드를 리턴
    const find = (node, parent) => {
        if (parent[node] === node) return node;
        parent[node] = find(parent[node], parent);
        return parent[node];
    };

    // 같은 그룹이라면 같은 부모노드를 가리킴
    const union = (nodeA, nodeB, parent) => {
        const a = find(nodeA, parent);
        const b = find(nodeB, parent);

        if (a < b) {
            parent[b] = a;
        } else {
            parent[a] = b;
        }
    };

    for (let i = 0; i < wires.length; i++) {
        // 각 노드의 부모노드 초기화(최초에는 자기 자신을 가리킴)
        const parents = Array.from({ length: n + 1 }, (x, i) => i);
        for (const [idx, [v1, v2]] of wires.entries()) {
            // 간선 분리
            if (i === idx) continue;
            // 같은 그룹인지 확인하고, 같은 그룹이라면 같은 부모노드로 업데이트
            union(v1, v2, parents);
        }
        // 같은 부모노드를 가진 그래프에 속한 총 노드의 수
        const graph = parents.slice(1).filter(x => parents[1] === find(x, parents)).length;
        answer = Math.min(answer, Math.abs(2 * graph - n));
    }
    return answer;
}

const input1 = 9;
const input2 = [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
];
const input3 = [1, 1, 1, 1, 1, 3, 3];
// console.log(solution(input1));
console.log(solution2(input1, input2));
// console.log(solution(input1, input2, input3));
