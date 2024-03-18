/* --------------Stack/Queue-------------- */
/* 같은 숫자는 싫어 */
function solution(arr) {
  var answer = [];
  arr.forEach((v) => {
    if (answer[answer.length - 1] === v && answer.length > 0) return;
    else answer.push(v);
  });
  return answer;
}

/* 기능개발 */
function solution(progresses, speeds) {
  var answer = [];
  var strLength = progresses.length;
  while (progresses.length > 0) {
    progresses = progresses.map((v, i) => (v += speeds[i]));
    let functionCount = 0;

    for (p of progresses) {
      if (p >= 100) functionCount++;
      else break;
    }

    if (functionCount > 0) {
      progresses.splice(0, functionCount);
      speeds.splice(0, functionCount);
      answer.push(functionCount);
    }
  }
  return answer;
}

/* 올바른 괄호 */
function solution(s) {
  let stack = [];
  let str = s.split("");

  for (v of str) {
    if (v === "(") stack.push("(");
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

/* 프로세스 */
function solution(priorities, location) {
  var answer = [];
  var iter = 0;
  priorities = priorities.map((v) => {
    return {
      v,
      i: iter++,
    };
  });

  let limit = 10;
  let index = 0;

  while (true) {
    let topPriority = 0;
    let max;
    for (let i = 0; i < priorities.length; i++) {
      if (
        priorities[(index + i) % priorities.length].v <= limit &&
        topPriority < priorities[(index + i) % priorities.length].v
      ) {
        max = (index + i) % priorities.length;
        topPriority = priorities[(index + i) % priorities.length].v;
      }
    }
    console.log(topPriority, max);
    limit = topPriority;
    index = max;
    if (location === priorities[index].i) {
      return answer.length + 1;
    }
    answer.push(priorities.splice(index, 1));
  }
}

/* 다리를 지나는 트럭 */
function solution(bridge_length, weight, truck_weights) {
  let timePass = 1;

  let onBridge = [truck_weights.shift()];
  let onBridgeCount = [0];

  while (onBridge.length > 0) {
    timePass++;

    // Move Truck
    onBridgeCount.forEach((v, i, arr) => (arr[i] = v + 1));

    // Reove Truck
    if (onBridgeCount[0] >= bridge_length) {
      onBridge.shift();
      onBridgeCount.shift();
    }

    // Add Truck
    let totalWeight = 0;
    onBridge.forEach((v) => (totalWeight += v));
    if (totalWeight + truck_weights[0] <= weight) {
      onBridge.push(truck_weights.shift());
      onBridgeCount.push(0);
    }
  }

  return timePass;
}

/* 주식 가격 */
function solution(prices) {
  // 제일 빠른 정답
  // let answer = [];

  // for(let i=0; i<prices.length; i++) {
  //     let sum = 0;
  //     for(let j=i+1; j<prices.length; j++) {
  //         sum += 1;
  //         if(prices[i] > prices[j]) {
  //             break;
  //         }

  //     }
  //     answer.push(sum);
  // }

  // return answer;

  // 빙글빙글 돌아간 정답
  // let tempArr = [];
  // let answer = new Array(prices.length).fill(0);
  // let totalIndex = prices.length;

  // for (let i = 0; i < totalIndex; i++) {
  //   if (i === totalIndex - 1) {
  //     tempArr.push([i, 0, prices[i]]);
  //     for (const a of tempArr) {
  //       answer[a[0]] = a[1];
  //     }
  //     break;
  //   }

  //   for (let j = tempArr.length - 1; j >= 0; j--) {
  //     if (tempArr[j][2] <= prices[i]) tempArr[j][1]++;
  //     else {
  //       const a = tempArr.pop();
  //       answer[a[0]] = a[1];
  //     }
  //   }
  //   tempArr.push([i, 1, prices[i]]);
  // }

  // return answer;

  // 목적에 맞는 정답
  let tempArr = [];
  let totalIndex = prices.length;
  let answer = new Array(totalIndex).fill(0);

  for (let i = 0; i < totalIndex; i++) {
    if (i === totalIndex - 1) {
      for (const a of tempArr) {
        answer[a] = i - a;
      }
      break;
    }

    for (let j = tempArr.length - 1; j >= 0; j--) {
      if (prices[tempArr[j]] > prices[i]) {
        const a = tempArr.pop();
        answer[a] = i - a
      }
    }
    tempArr.push(i);
  }

  return answer;
}
// const input1 = [2, 1, 3, 1, 2]; //[1,3,1,1,0]
const input1 = [1, 2, 3, 2, 3]; // [4,3,3,1,0)]
const input2 = 7;
const input3 = [1, 1, 1, 1, 1, 3, 3];
console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
