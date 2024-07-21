function heriocInventory(arr) {
    let result = [];

    for(const element of arr){
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}
heriocInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

heriocInventory(['Jake / 1000 / Gauss, HolidayGrenade']);