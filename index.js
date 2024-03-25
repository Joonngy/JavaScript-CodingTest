/* --------------Heap-------------- */
/* 더 맵게 */
class heap {
    constructor() {
        this.heap = [null];
    }

    HeapPush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
            [this.heap[curIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[curIdx]];
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    HeapPop() {
        if (this.heap.length <= 1) return;
        const min = this.heap[1];

        if (this.heap.length > 2) this.heap[1] = this.heap.pop();
        else return this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (this.heap.length <= leftIdx) return min;
        if (this.heap.length <= rightIdx) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                [this.heap[curIdx], this.heap[leftIdx]] = [this.heap[leftIdx], this.heap[curIdx]];
            }
            return min;
        }
        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            [this.heap[curIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[curIdx]];
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}
function solution(scoville, K) {
    let answer = 0;
    const heapMem = new heap();

    scoville.forEach(v => heapMem.HeapPush(v));

    while (heapMem.heap.length > 2 && heapMem.heap[1] < K) {
        console.log(heapMem.heap, answer);

        const a = heapMem.HeapPop()
        const b = heapMem.HeapPop()
        const c = a + b * 2;
        console.log(a,b);
        heapMem.HeapPush(c);
        answer++;
    }

    console.log(heapMem.heap);
    if (heapMem.heap[1] >= K) return answer;
    else return -1;
}

function solution(scoville, K) {
    let answer = 0;
    let newScoville = [];

    // 오름차순 정렬
    scoville.sort((a, b) => a - b);

    let left = 0; // scoville 현재 인덱스
    let right = 0; // newScoville 현재 인덱스

    // scoville, newScoville은 항상 오름차순 정렬
    // 음식을 섞을 수 있고 && 최솟값이 K보다 작은 경우
    while (scoville.length - left + newScoville.length - right >= 2 && (scoville[left] < K || newScoville[right] < K)) {
        let origin1;
        let origin2;
        let new1;
        let new2;

        if (left < scoville.length) origin1 = scoville[left];
        if (left + 1 < scoville.length) origin2 = scoville[left + 1];
        if (right < newScoville.length) new1 = newScoville[right];
        if (right + 1 < newScoville.length) new2 = newScoville[right + 1];

        if (newScoville.length === 0 || right >= newScoville.length || (origin2 !== undefined && origin2 <= new1)) {
            // case1. scoville에서 2가지 음식을 섞는 경우
            left += 2;
            newScoville.push(origin1 + origin2 * 2);
        } else if (left >= scoville.length || (new2 !== undefined && new2 <= origin1)) {
            // case2. newScoville에서 2가지 음식을 섞는 경우
            right += 2;
            newScoville.push(new1 + new2 * 2);
        } else {
            // case3. scoville, newScoville에서 1가지 음식씩 섞는 경우
            left += 1;
            right += 1;
            origin1 < new1 ? newScoville.push(origin1 + new1 * 2) : newScoville.push(new1 + origin1 * 2);
        }

        answer += 1;
    }

    return scoville[left] < K || newScoville[right] < K ? -1 : answer;
}

const input1 = [1,1,1,2,2,2,2,2,2,2,2,2,2]
const input2 = 30;
const input3 = [1, 1, 1, 1, 1, 3, 3];
// console.log(solution(input1));
console.log(solution(input1, input2));
// console.log(solution(input1, input2, input3));
