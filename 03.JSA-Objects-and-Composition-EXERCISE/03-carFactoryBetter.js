function carFactoryBetter(order) {
    let res = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    const engineEnum = {
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 },
    }

    const carriageFactory = (type, color) => {
        const res = {
            type,
            color
        }
        return res;
    }

    if (order.power <= 90) {
        res.engine = engineEnum.SmallEngine;
    } else if (order.power <= 120) {
        res.engine = engineEnum.NormalEngine;
    } else {
        res.engine = engineEnum.MonsterEngine;
    }

    res.carriage = carriageFactory(order.carriage, order.color);
    
    let wheelSize = order.wheelSize % 2 === 0 ? order.wheelSize - 1 : order.wheelSize;
    res.wheels = new Array(4).fill(wheelSize);
    return res;

}

let res = carFactoryBetter({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelSize: 14
});

console.log(res);
