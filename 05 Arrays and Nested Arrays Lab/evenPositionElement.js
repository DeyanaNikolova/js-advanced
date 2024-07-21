function evenPositionEl(array) {
  let result = '';
  
    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            result += array[i] + ' ';
        }
    }
    console.log(result);
}
evenPositionEl(['20', '30', '40', '50', '60']);
evenPositionEl(['5', '10']);
evenPositionEl(['a', 'b', 'c', 'd', 'e']);