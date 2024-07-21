function townInfo(arr) {
    let result = [];
    class Town {
        constructor(name, latitude, longtitude){
            this.Town = name;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longtitude);
        }
    }
    for(let i = 1; i < arr.length; i++){
        let array = arr[i].split('|').map(n => n.trim()).filter(x => x.length != 0);
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2);
        let longtitude = Number(array[2]).toFixed(2);
        let town = new Town(townName, latitude, longtitude);
        result.push(town);
    }
    return JSON.stringify(result);
}
console.log(townInfo(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));

townInfo(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);