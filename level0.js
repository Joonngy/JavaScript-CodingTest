/* --------------Day 12-------------- */
/* 모음 제거 */
// function solution(my_string) {
//   const regex = /[aeiou]/g;
//   var answer = my_string.replace(regex, "");

//   return answer;
// }

/* 문자열 정렬하기 (1) */
// function solution(my_string) {
//     var answer = [];
//     const arr = Array.from(my_string);
//     arr.forEach((element) => {
//         if(!isNaN(element)) answer.push(parseInt(element));
//     })

//     answer.sort((a,b) => a-b);

//     return answer;
// }

/* 숨어있는 숫자의 덧셈 */
// function solution(my_string) {
//     var answer = 0;
//     const arr = Array.from(my_string);
//     arr.forEach((element) => {
//         if(!isNaN(element)) answer += parseInt(element);
//     })

//     return answer;
// }

/* 소인수분해 */
// function solution(n) {
//   let result = [];
//   let divisor = 2;

//   while (n >= 2) {
//     if (n % divisor === 0) {
//       result.push(divisor);
//       n = n / divisor;
//     } else divisor++;
//   }

//   return [...new Set(result)];
// }

/* --------------Day 13-------------- */
/* 컨트롤 제트 */
// function solution(s) {
//   let arr = [];
//   s.split(" ").forEach((e) => {
//     if (e === "Z") arr.pop();
//     else arr.push(e);
//   });
//   return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
// }

/* 배열 원소의 길이 */
// function solution(strlist) {
//     return strlist.map((e) => e.length);
// }

/* 중복된 문자 제거 */
// function solution(my_string) {
//   return [...new Set(my_string)].join("");
// }

/* 삼각형의 환성조건 (1)*/
// function solution(sides) {
//     sides.sort((a,b)=>a-b);
//     return (sides[0] + sides[1] > sides[2] ? 1 : 2)
// }

/* --------------Day 14-------------- */
/* 가까운 수 */
// function solution(array, n) {
//   var calArray = array.sort((a, b) => a - b).map((e) => Math.abs(n - e));
//   return array[calArray.indexOf(Math.min(...calArray))];
// }

/* 369게임 */
// function solution(order) {
//   const arr = [3, 6, 9];
//   return String(order)
//     .split("")
//     .filter((e) => arr.includes(parseInt(e))).length;

//   var answer = 0;
//   order
//     .toString()
//     .split("")
//     .filter((e) => parseInt(e) !== 0)
//     .forEach((e) => {
//       if (e % 3 === 0) answer++;
//     });
//   return answer;

//   return ("" + order).split(/[369]/).length - 1;
// }

/* 암호 해독 */
// function solution(cipher, code) {
//   return cipher
//     .split("")
//     .filter((e, i) => i % code === code - 1)
//     .join("");
// }

/* 대문자와 소문자 */
// function solution(my_string) {
//   return my_string
//     .split("")
//     .map((e) => {
//       if (e === e.toUpperCase()) e = e.toLowerCase();
//       else e = e.toUpperCase();
//       return e;
//     })
//     .join("");
// }

/* --------------Day 15-------------- */
/* 영어가 싫어요 */
// function solution(numbers) {
//   const checkArr = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];

//   checkArr.forEach((nums, index) => {
//     numbers = numbers.replaceAll(nums, idx);
//   });

//   return Number(numbers);
// }

/* 인덱스 바꾸기 */
// function solution(my_string, num1, num2) {
//   my_string = my_string.split("");
//   [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//   return my_string.join("");
// }

/* 한번만 등장한 문자 */
// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');

//     const m = new Map();
//     [...s].forEach(e=>m.set(e, m.get(e)+1||1));
//     return [...m].filter(e=>e[1]===1).map(e=>e[0]).sort().join("");
// }

/* 약수 구하기 */
// function solution(n) {
//     var answer = [];
//     for(let i=1;i<=n; i++){
//         if(n % i === 0) answer.push(i);
//     }
//     return answer;
// }

/* --------------Day 16-------------- */
/* 편지 */
// function solution(message) {
//   return message.length * 2;
// }

/* 가장 큰 수 찾기 */
// function solution(array) {
//   return [Math.max(...array), array.indexOf(Math.max(...array))];
// }

/* 문자열 계산하기 */
// function solution(my_string) {
//   let arr = my_string.split(" ");
//   let cal = arr[0] * 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === "+") cal += arr[i + 1] * 1;
//     else if (arr[i] === "-") cal -= arr[i + 1] * 1;
//     else continue;
//   }
//   return cal;
// }

/* 배열의 유사도 */
// function solution(s1, s2) {
//   var answer = 0;
//   s1.forEach((e) => {
//     if (s2.includes(e)) answer++;
//   });
//   return answer;
// }

/* --------------Day 17-------------- */
/* 숫자 찾기 */
// function solution(num, k) {
//   return String(num).indexOf(k) + 1 || -1;
//   return String(num)
//     .padStart(num.toString().length + 1, "0")
//     .split("")
//     .indexOf(k.toString());
// }

/* n의 배수 고르기 */
// function solution(n, numlist) {
//   return numlist.filter((e) => e % n === 0);
// }

/* 자릿수 더하기 */
// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);
// }

/* OX 퀴즈 */
// function solution(quiz) {
//   return quiz.map((t) => {
//     const [calc, result] = t.split(" = ");
//     const sign = calc.includes("+") ? 1 : -1;
//     const [a, b] = calc.split(sign === 1 ? " + " : " - ");

//     return +a + +b * sign === +result ? "O" : "X";
//   });
// }

/* --------------Day 18-------------- */

/* 문자열안에 문자열 */
// function solution(str1, str2) {
//     let answer = 0;
//     let index = 0;
//     while(true){
//         index = str1.indexOf(str2, index);
//         console.log(index);
//         if(index == -1) break;
//         answer++;
//         index++;
//     }
//     return answer;
// }
/* 제겁스 핀뱔하기 */
// function solution(n) {
//     return Math.sqrt(n) % 1 === 0 ? 1 : 2;
// }
/* 세균 증식 */
// function solution(n, t) {
//   return n << t; //시프트
// }
/* 문자열 정렬 */
// function solution(my_string) {
//     var answer = my_string.toLowerCase().split('').sort().join('');
//     return answer;
// }

/* --------------Day 19-------------- */
/* 7의 개수 */
// function solution(array) {
//     var answer = 0;
//     var result = array.join('').split('7');
//     console.log(result);
//     return answer;
// }

/* 잘라서 배열로 저장하기 */
// function solution(my_str, n) {
//     var answer = [];
//     for(let i=0;i<my_str.length;i+=n){
//       answer.push(my_str.substr(i, n));
//     }
//     return answer;
// }

/* 중복된 숫자 개수 */
// function solution(array, n) {
//     var answer = 0;

//     array.forEach((num) => {
//         if(num === n) answer++;
//     })

//     return answer;
// }

/* 머쓱이보다 키 큰 사람 */
// function solution(array, height) {
//     return array.filter(e => e > height).length;
// }

/* --------------Day 20-------------- */
/* 직사각형 넓이 구하기 */
// function solution(dots) {
//     dots.sort((a,b)=>a[0] - b[0])
//     console.log(dots);
//     return Math.abs(dots[0][1] - dots[1][1]) * Math.abs(dots[1][0] - dots[2][0]);
// }

/* 캐릭터의 좌표 */
// function solution(keyinput, board) {
//     var answer = [0,0];
//     board = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
//     keyinput.forEach(e => {
//         if(e === 'left') answer[0]>-board[0]? answer[0]-- : answer[0];
//         else if(e === 'right') answer[0]<board[0]? answer[0]++ : answer[0];
//         else if(e === 'up') answer[1]<board[1]? answer[1]++ : answer[1];
//         else if(e === 'down') answer[1]>-board[1]? answer[1]-- : answer[1];
//         console.log(answer);
//     })
//     return answer;
// }

/* 최댓값 만들기 (2) */
// function solution(numbers) {
//     numbers.sort((a, b) => a - b);
//     return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
// }

/* 다항식 더하기 */
// function solution(polynomial) {
//     const arr = polynomial.split(" + ");
//     const xNum = arr
//                 .filter(n => n.includes("x"))
//                 .map(n => n.replace('x', '') || '1')
//                 .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
//     const num = arr
//                 .filter(n => !isNaN(n))
//                 .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

//     let answer = [];
//     if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
//     if(num) answer.push(num);

//     return answer.join(" + ");
// }

/* --------------Day 21-------------- */
/* 숨어있는 숫자의 덧셈 */
// function solution(my_string) {
//   return my_string.split(/[a-zA-Z]/g).reduce((a, v) => +a + +v, 0);
// }

/* 안전지대 */
// function solution(board) {
//   let answer = 0;

//   const dangerArea = [
//     [-1, 0],
//     [1, 0],
//     [0, 1],
//     [0, -1],
//     [-1, 1],
//     [1, 1],
//     [1, -1],
//     [-1, -1],
//   ]; // 위험지역 xy좌표

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] == 1) {
//         dangerArea.map((v) => {
//           let [x, y] = v;
//           [x, y] = [x + i, y + j];
//           if (
//             x >= 0 &&
//             x < board.length &&
//             y >= 0 &&
//             y < board[i].length &&
//             board[x][y] == 0
//           )
//             board[x][y] = 2;
//         });
//       }
//     }
//   }
//   board.map((v1) => v1.map((v2) => (v2 == 0 ? answer++ : 0)));
//   return answer;
// }

/* 삼각형의 완성조건 (2) */
// function solution(sides) {
//   sides.sort((a, b) => a - b);

//   return sides[0] + sides[0] - 1;
// }

/* 외계어 사전 */
// function solution(spell, dic) {
//     return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
// }

// function solution(p, d) {
//     return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }

/* --------------Day 22-------------- */
/* 저주의 숫자 3 */
// function solution(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || String(i).includes("3")) n += 1;
//   }
//   return n;
// }

/* 평행 */
// function solution(dots) {
//   let x1 = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]);
//   let x2 = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]);
//   if (x1 === x2) return 1;

//   x1 = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0]);
//   x2 = (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0]);
//   if (x1 === x2) return 1;

//   x1 = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0]);
//   x2 = (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0]);
//   if (x1 === x2) return 1;

//   return 0;
// }

/* 겹치는 선분의 길이 */
// function solution(lines) {
//   lines.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   let answer = [];

//   for (let i = 0; i < lines.length - 1; i++) {
//     for (let j = i + 1; j < lines.length; j++) {
//       if (lines[i][1] > lines[j][0])
//         answer.push([
//           lines[i][0] > lines[j][0] ? lines[i][0] : lines[j][0],
//           lines[i][1] < lines[j][1] ? lines[i][1] : lines[j][1],
//         ]);
//     }
//   }

//   if (answer.length === 0) return 0;
//   if (answer.length === 1) return answer[0][1] - answer[0][0];
//   if (answer.length === 2)
//     return answer[0][1] > answer[1][0]
//       ? answer[1][1] - answer[0][0]
//       : answer[1][1] - answer[1][0] + answer[0][1] - answer[0][0];

//   let final = [];
//   answer.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   for (let i = 0; i < answer.length - 1; i++) {
//     final.push(
//       answer[i][1] > answer[i + 1][0]
//         ? [answer[i][0], answer[i + 1][1]]
//         : [
//             answer[i][0] > answer[i + 1][0] ? answer[i + 1][0] : answer[i][0],
//             answer[i][1] > answer[i + 1][1] ? answer[i + 1][1] : answer[i][1],
//           ]
//     );
//   }
//   return final[0][1] > final[1][0]
//     ? final[1][1] - final[0][0]
//     : final[1][1] - final[1][0] + final[0][1] - final[0][0];
// }

// function solution(lines) {
//   let answer = new Set();
//   lines.sort((a, b) => a[0] - b[0]);
//   console.log(lines);
//   for (let i = 0; i < lines.length - 1; i++) {
//     for (let j = 1; j < lines.length - i; j++) {
//       let min = lines[i][0] > lines[i + j][0] ? lines[i][0] : lines[i + j][0];
//       let max = lines[i][1] > lines[i + j][1] ? lines[i + j][1] : lines[i][1];
//       console.log(min, max);
//       for (let k = min; k < max; k++) {
//         answer.add(k);
//       }
//     }
//     console.log(answer);
//   }
//   return answer.size;
// }

/* 유한소수 판별하기 */
// function solution(a, b) {
//   let n = 1;
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) n = i;
//   }

//   b /= n;
//   while (b % 2 === 0) b /= 2;
//   while (b % 5 === 0) b /= 5;
//   return b === 1 ? 1 : 2;
// }

/* --------------Day 23-------------- */
/* 특이한 정렬 */
// function solution(numlist, n) {
//   numlist.sort((a, b) => b - a);
//   var answer = [];
//   let len = numlist.length;
//   for (let i = 0; i < len; i++) {
//     let difference = 10000;
//     let index;
//     for (let j = 0; j < numlist.length; j++) {
//       let a = Math.abs(n - numlist[j]);
//       if (difference > a) {
//         index = j;
//         difference = a;
//       }
//     }
//     console.log();
//     answer.push(numlist.splice(index, 1).pop());
//   }
//   return answer;
// }

/* 등수 매기기 */
// function solution(score) {
//   var map = [];
//   for (let i = 0; i < score.length; i++) {
//     let average = 0;
//     for (s of score[i]) {
//       average += s;
//     }
//     map.push([i, average / 2]);
//   }

//   var rankedMap = [...map].sort((a, b) => b[1] - a[1]);

//   let prevValue = -1;
//   let prevRank = 1;
//   let index = 1;
//   for (a of rankedMap) {
//     console.log(prevRank, a[1]);
//     if (prevValue !== a[1]) {
//       prevValue = a[1];
//       prevRank = index;
//     }

//     map[a[0]][0] = prevRank;
//     index++;
//   }
//   console.log(map);

//   var answer = [];
//   for (a of map) {
//     answer.push(a[0]);
//   }
//   return answer;
// }

// function solution(score) {
//   let avg = score.map((v) => (v[0] + v[1]) / 2);
//   let sorted = [...avg].sort((a, b) => b - a);
//   return avg.map((v) => sorted.indexOf(v) + 1);
// }

/* 옹알이 (1) */
// function solution(babbling) {
//   let allowed = ["aya", "ye", "woo", "ma"];
//   var answer = 0;

//   for (b of babbling) {
//     for (a of allowed) {
//       let index = b.indexOf(a);
//       if (index !== -1) {
//         b = b.replaceAll(a, " ");
//         console.log(b);
//       }
//     }

//     b = b.replaceAll(" ", "");
//     if (b.length === 0) answer++;
//   }

//   return answer;
// }

/* 로그인 성공? */
// function solution(id_pw, db) {
//   for(let i=0;i<db.length;i++){
//     if(id_pw[0] == db[i][0]) {
//       if(id_pw[1] == db[i][1])
//         return 'login';
//       else
//       return 'wrong pw';
//     }
//   }

//   return 'fail';
// }

/* --------------Day 24-------------- */
/* 치킨 쿠폰 */
// function solution(chicken) {
//   let answer = 0;
//   let coupon = chicken

//   while(coupon >= 10){
//       answer = answer + parseInt(coupon/10)
//       coupon = parseInt(coupon/10)+ coupon%10
//   }

//   return answer;
// }

/* 이진수 더하기 */
// function solution(bin1, bin2) {
//   let temp = Number(bin1) + Number(bin2);
//   let array = temp.toString().split("");
//   let answer = [];
//   let compliment = 0;

//   for (let i = array.length - 1; i >= 0; i--) {
//     let a = parseInt(array[i]) + compliment;
//     compliment = 0;
//     if(a > 1) {
//       compliment = 1;
//       a = a % 2;
//     }
//     console.log(i, a, compliment)
//     answer.push(a);
//   }
//   if (compliment > 0) answer.push(compliment)
//   return answer.reverse().join('');
// }

// function solution(bin1, bin2) {
//   return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
// }

/* A로 B 만들기 */
// function solution(before, after) {
//   before = before.split("");

//   for (let i = 0; i < before.length; i++) {
//     after = after.replace(before[i], "");
//   }

//   return after.length === 0 ? 1 : 0;
// }

/* k의 개수 */
// function solution(i, j, k) {
//   var answer = 0;
//   for (let iter = i; iter <= j; iter++) {
//     answer += iter
//       .toString()
//       .split("")
//       .filter((a) => a === k.toString()).length;
//   }

//   return answer;
// }

/* --------------Day 25-------------- */
// /* 문자열 밀기 */
// function solution(A, B) {
//   let arr = [...A];
//   var answer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if(A !== B) {
//       arr.unshift(arr.pop())
//       if(arr.join('') === B)
//           return i+1;
//       answer++
//     } else {
//       return answer
//     }
//   }

//   return -1;
// }

/* 종이 자르기 */
// function solution(M, N) {
//   return (M - 1) + (M * (N - 1));
// }

/* 연속된 수의 합 */
// function solution(num, total) {
//   const min = Math.ceil(total / num - Math.floor(num / 2));
//   return Array.from({ length: num }, (_, i) => i + min);
// }

/* 다음에 올 숫자 */
// function solution(common) {
//   if (common[2] - common[1] === common[1] - common[0]) {
//     return common.pop() + common[1] - common[0];
//   } else {
//     return common.pop() * (common[1] / common[0]);
//   }
// }

const input1 = [1, 2, 3, 4];
const input2 = 12;
const input3 = 1;
console.log(solution(input1));
// console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));

// 정규식 공부
