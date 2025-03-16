function sortingNumbers(data) {
    let smallNumber = data.sort((a, b) => a - b).slice();
    let biggestNumber = data.sort((a, b) => b - a).slice();
    let res = [];

    // console.log(smallNumber);
    // console.log(biggestNumber);

    let index = 0;
    // let endIndex = (smallNumber.length - 1 * 2);
    for (let i = 0; i < Math.trunc(smallNumber.length/2); i++) {
        res.push(smallNumber[index]);
        res.push(biggestNumber[index]);
        index++;

    }
    return res;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
