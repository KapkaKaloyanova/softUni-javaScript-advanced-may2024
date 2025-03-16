function fruit(fruitType, weight, pricePerKg){

    let money = weight*pricePerKg/1000;
    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`);

}
fruit('orange', 2500, 1.80)