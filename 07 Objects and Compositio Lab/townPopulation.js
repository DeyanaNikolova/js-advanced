function solve(list) {
    const result = {};
    for(const town of list){
        const tokens = town.split(' <-> ');
        const name= tokens[0];
        const population = Number(tokens[1]);
        if(result[name] == undefined){
        result[name] = population;
        }else{
            result[name] += population;
        }
    }
   for(let town in result){
       console.log(`${town} : ${result[town]}`);
   }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
console.log('----');
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
