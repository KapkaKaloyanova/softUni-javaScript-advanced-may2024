function carFactory(order) {
    let res = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    // const engineEnum = {
    //     smallEngine: { power: 90, volume: 1800 },
    //     normalEngine: { power: 120, volume: 2400 },
    //     monsterEngine: { power: 200, volume: 3500 },
    // }

    // const carriageFactory = (type, color) => { }

    if (order.power <= 90) {
        res.engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        res.engine = { power: 120, volume: 2400 };
    } else {
        res.engine = { power: 200, volume: 3500 };
    }

    if (order.carriage === 'hatchback') {
        res.carriage = { type: 'hatchback', color: order.color }
    } else {
        res.carriage = { type: 'coupe', color: order.color }
    }

    let wheelSize = order.wheelSize % 2 === 0 ? order.wheelSize - 1 : order.wheelSize;
    res.wheels = new Array(4).fill(wheelSize);
    return res;

}

let res = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelSize: 14
});

console.log(res);
