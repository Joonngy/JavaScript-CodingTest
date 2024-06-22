// Question 4
function solution4(rates, strategy, k) {
    let initialProfit = 0;
    for (i = 0; i < rates.length; i++) {
        if (strategy[i] === -1) initialProfit -= rates[i];
        else if (strategy[i] === 1) initialProfit += rates[i];
    }

    let iter = rates.length - k + 1;
    for (let i = 0; i < iter; i++) {
        let newProfit = 0;
        for (let j = 0; j < rates.length; j++) {
            let newStrategy = strategy[j];
            if (j >= i && j < i + k) {
                newStrategy = j - i < k / 2 ? 0 : 1;
            }
            if (newStrategy === -1) newProfit -= rates[j];
            else if (newStrategy === 1) newProfit += rates[j];
        }
        if (initialProfit < newProfit) initialProfit = newProfit;
    }

    return initialProfit;
}

// Question 3
function solution3(schedules, length) {
    let newPlan = [];
    for (let i = 0; i < schedules.length; i++) {
        for (let j = 0; j < schedules[i].length; j++) {
            newPlan.push(schedules[i][j]);
        }
    }
    newPlan.sort((a, b) => a[0] - b[0]);
    if (newPlan.length === 0) return 0;

    let startTime = 0;
    for (let i = 0; i < newPlan.length; i++) {
        let timeDiff = newPlan[i][0] - startTime;
        if (timeDiff >= length) return startTime;
        if (startTime < newPlan[i][1]) startTime = newPlan[i][1];
    }
    if (1440 - startTime >= length) return startTime;
    return -1;
}

// Question 2
function solution2(nums1, nums2) {
    let answer = [];
    let length = nums1.length;

    for (let i = 0; i < length; i++) {
        let total = 0;
        for (let j = 0; j < length; j++) {
            total += Math.abs(nums2[j] - nums1[j]);
        }
        answer.push(total);
        nums1.unshift(nums1.pop());
    }

    answer.sort((a, b) => a - b);
    return answer;
}

// Question 1
function solution1(years) {
    let answer = 0;
    let prev = years.shift();

    for (const y of years) {
        if (prev > y) answer += 2;
        else if (prev < y) answer += 1;
        prev = y;
    }

    return answer;
}

const input1 = [
    [
        [10, 70],
        [75, 135],
        [135, 180],
        [335, 350],
        [380, 425],
        [455, 575],
        [585, 705],
        [1065, 1080],
    ],
    [
        [5, 20],
        [35, 80],
        [140, 200],
        [245, 320],
        [410, 530],
        [650, 770],
        [890, 905],
        [965, 1055],
        [1145, 1205],
        [1215, 1245],
        [1260, 1290],
    ],
    [
        [5, 20],
        [140, 215],
        [255, 285],
        [375, 495],
        [525, 585],
        [590, 650],
        [770, 815],
        [815, 890],
        [1010, 1070],
        [1100, 1145],
        [1265, 1385],
    ],
    [
        [120, 195],
        [335, 455],
        [545, 605],
        [725, 740],
        [740, 755],
        [845, 905],
        [935, 995],
    ],
    [
        [15, 105],
        [165, 195],
        [245, 365],
        [380, 425],
        [485, 500],
        [505, 550],
        [550, 610],
        [670, 745],
        [835, 955],
        [1015, 1060],
        [1075, 1135],
        [1255, 1270],
        [1330, 1345],
        [1355, 1385],
    ],
];
const input2 = 15;

console.log(solution3(input1, input2)); //215
