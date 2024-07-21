function create(words) {

   let contentElement = document.getElementById('content');

   for(let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', reveal);

      contentElement.appendChild(div);

      function reveal(e) {
         e.currentTarget.children[0].style.display = '';
      } 
   }
}