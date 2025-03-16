function sameNumbers(num) {

    let numAsStr = num.toString();
    let firstDigit = numAsStr[0];
    let sum = 0;
    let isAllSameDigit = true;

    for (const digit of numAsStr) {
        sum += Number(digit);
        if (digit !== firstDigit) {
            isAllSameDigit = false;
        }
    }
    console.log(isAllSameDigit);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234)