function subtract() {
    let firstNumRef = document.getElementById("firstNumber");
    let secNumRef = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result");

    let num1 = Number(firstNumRef.value);
    let num2 = Number(secNumRef.value );
    
    let result =num1-num2;

    resultRef.textContent = result;
}