const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);

        const combinations = getCombinations(rest, selectNumber - 1);

        const attached = combinations.map(el => [fixed, ...el]);

        results.push(...attached);
    });

    return results;
};

const getPermutation = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 

        const combinations = getPermutation(rest, selectNumber - 1);

        const attached = combinations.map(el => [fixed, ...el]);

        results.push(...attached);
    });

    return results;
}

const array = [1, 2, 3, 4];
const num = 3;
console.log(getCombinations(array, num));
console.log(getPermutation(array, num));

