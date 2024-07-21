function solve(arr) {
    let juices = {};
    let bottles = {};

    function createBottle(flavour) {
        if (juices[flavour] >= 1000) {
            if (!bottles.hasOwnProperty(flavour)){
                bottles[flavour] = 0;
            }
            let numberOfBottles = Math.floor(juices[flavour] / 1000);
            bottles[flavour] += numberOfBottles;
            juices[flavour] -= (numberOfBottles * 1000);
        }
    }

    for (line of arr) {
        let [flavour, qty] = line.split(' => ');
        qty = Number(qty);

        if (!juices.hasOwnProperty(flavour)) {
            juices[flavour] = 0;
        }
        juices[flavour] += qty;

        createBottle(flavour);
    }

    for(let flavour in bottles){
        console.log(flavour + ' => ' + bottles[flavour]);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('----');
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);