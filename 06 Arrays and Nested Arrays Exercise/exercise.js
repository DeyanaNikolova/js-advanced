function solve(moves) {

  let dashboard = [
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']];
    let playerOne = 'X';
    let playerTwo = 'O';

    for(let i = 0; i < moves.length; i++){
      if(i % 2 == 0){
        dashboard[i].replace(playerOne);
      }else{
        dashboard[i].replace(playerTwo)
      }
    }
    console.log(dashboard);

}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
