function search() {

   let listElements = document.querySelectorAll('#towns li');
   let result = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;

   for (let element of listElements) {

      if (element.textContent.includes(searchText) && searchText !== '') {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   }
   result.textContent = `${matches} matches found`;
}
