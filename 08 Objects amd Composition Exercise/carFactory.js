function carFactory(wantedCar) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    let carriages = [{type: 'hatchback', color: wantedCar.color}, {type: 'coupe', color: wantedCar.color}];
    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return{
        model: wantedCar.model,
        engine:engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

// function solve(order) {

//     let car = {};
//     let engine = {};
//     let carriage = {};

//     let wheelsize = 0;
//     if (order.wheelsize % 2 == 0) {
//         wheelsize = order.wheelsize - 1;
//     } else {
//         wheelsize = order.wheelsize;
//     }

//     if (order.power <= 90) {
//         engine.power = 90;
//         engine.volume = 1800;
//     } else if (order.power <= 120) {
//         engine.power = 120;
//         engine.volume = 2400;
//     } else if (order.power <= 200) {
//         engine.power = 200;
//         engine.volume = 3500;
//     }

//     carriage.type = order.carriage;
//     carriage.color = order.color;

//     car.model = order.model;
//     car.engine = engine;
//     car.carriage = carriage;
//     car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
   
//     return car;
// }

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });
