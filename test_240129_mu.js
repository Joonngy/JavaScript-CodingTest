function solution(before, after) {
    var answer = 0;
    var i = 0;

    before = before.sort();
    after = after.sort().reverse();

    console.log(before);
    console.log(after);

    let alpha = after.pop();
    while (true) {
        console.log(before[i], alpha);
        if (after.length <= 1 && i >= before.length) break;
        if (after.length === 0) break;

        if (alpha === before[i]) {
            i++;
        } else if (before[i] < alpha) {
            i++;
            continue;
        } else {
            alpha = after.pop();
        }

        answer++;
    }
    return answer;
}

// console.log(solution(["A", "B", "C"], ["B", "C", "A"]));
// console.log(solution(["A", "B", "C"], ["D", "E", "C"]));
console.log(solution(['A', 'B', 'C', 'D'], ['B', 'Z', 'D', 'C']));
