function getDaysInMonth(month, year) {

 //let day = new Date(month, year, 0).getDate();
 let result =  new Date(year, month, 0).getDate();

   console.log(result);
}

getDaysInMonth(1, 2012);
getDaysInMonth(2, 2021);

