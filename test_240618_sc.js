function solution(tickets, roll, shop, money) {
    const ticketPrices = {};

    for (let ticket of tickets) {
        const [name, price] = ticket.split(' ');
        ticketPrices[name] = parseInt(price);
    }

    let answer = 0;

    const addTicket = (normalTicket, word) => {
        if (!normalTicket[word]) normalTicket[word] = 1;
        else normalTicket[word]++;

        return normalTicket;
    };

    let newNormalTicket = {};
    const dfs = (shopIndex, currentShop, remainingMoney, normalTicket) => {
        // 실수 4 -> 크거나 같아야함
        if (shopIndex >= shop.length) return;

        for (let i = 0; i < currentShop.length; i++) {
            const copyArr = [...currentShop];
            const ret = copyArr.splice(i, 1);
            // 실수 3 -> 굳이 dfs를 할 필요가없는데 진행함
            const newRemainingMoney = remainingMoney - ticketPrices[ret[0]];
            if (newRemainingMoney < 0) return;

            newNormalTicket = addTicket(JSON.parse(JSON.stringify(normalTicket)), ret[0]);

            dfs(shopIndex, copyArr, newRemainingMoney, newNormalTicket);

            let maxAnswer = 0;
            for (const key in newNormalTicket) {
                while (newNormalTicket[key] >= 3) {
                    maxAnswer++;
                    newNormalTicket[key] -= 3;
                }
            }

            if (maxAnswer > answer) answer = maxAnswer;
        }
        // 실수 1 -> 여기다가 넣어야 앞단이 끝나면 남은 뒤딴 데이터에 대해 진행
        // 실수 2 -> newNormalTicket을 사용해야 데이터 손실이 없음
        dfs(shopIndex + 1, shop[shopIndex + 1], remainingMoney - roll, newNormalTicket);
        return;
    };

    dfs(0, shop[0], money, {});

    return answer;
}

// case 1
if (true) {
    const input1 = ['A 1', 'B 2', 'C 5', 'D 3'];
    const input2 = 10;
    const input3 = [
        ['B', 'C', 'B', 'C'],
        ['A', 'A', 'A', 'B'],
        ['D', 'D', 'C', 'D'],
    ];
    const input4 = 30;

    console.log(solution(input1, input2, input3, input4) === 2);
}

// case 2
if (true) {
    const input1 = ['A 1', 'B 2', 'C 5', 'D 3'];
    const input2 = 10;
    const input3 = [
        ['B', 'C', 'B', 'C'],
        ['A', 'A', 'A', 'B'],
        ['D', 'D', 'C', 'D'],
    ];
    const input4 = 100;

    console.log(solution(input1, input2, input3, input4) === 4);
}

// case 3
if (true) {
    const input1 = ['A 2', 'B 1'];
    const input2 = 1;
    const input3 = [
        ['A', 'A', 'A'],
        ['A', 'B', 'B'],
        ['A', 'B', 'B'],
        ['A', 'B', 'B'],
    ];
    const input4 = 9;

    console.log(solution(input1, input2, input3, input4) === 2);
}

// case 4
if (true) {
    const input1 = ['A 2', 'B 1'];
    const input2 = 5;
    const input3 = [
        ['A', 'A', 'A'],
        ['A', 'B', 'B'],
        ['A', 'B', 'B'],
        ['A', 'B', 'B'],
    ];
    const input4 = 19;
    console.log(solution(input1, input2, input3, input4) === 2);
}
