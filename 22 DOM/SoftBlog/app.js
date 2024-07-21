function solve() {

   const authorInputEl = document.getElementById('creator');
   const titleInpitEl = document.getElementById('title');
   const categoryInputEl = document.getElementById('category');
   const contentAreaEl = document.getElementById('content');

   const createBtn = document.querySelector('.create');
   createBtn.addEventListener('click', createArticle);

   const postsSectionEl = document.querySelector('.site-content>main>section');
   const archiveSectionEl = document.querySelector('.archive-section ol');
   console.log(archiveSectionEl);

   function createArticle(e) {
      e.preventDefault();

      let author = authorInputEl.value;
      let title = titleInpitEl.value;
      let category = categoryInputEl.value;
      let content = contentAreaEl.value;

      const articleEl = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.textContent = title;

      const pCategory = document.createElement('p');
      pCategory.textContent = 'Category: ';
      const strong1 = document.createElement('strong');
      strong1.textContent = category;
      pCategory.appendChild(strong1);

      const pCreator = document.createElement('p');
      pCreator.textContent = 'Creator: ';
      const strong2 = document.createElement('strong');
      strong2.textContent = author;
      pCreator.appendChild(strong2);

      const pContent = document.createElement('p');
      pContent.textContent = content;

      const div = document.createElement('div');
      div.className = 'buttons';

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.remove();
      });

      const archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.remove();
         const li = document.createElement('li');
         li.textContent = title;
         archiveSectionEl.appendChild(li);

         const liElements = [...archiveSectionEl.querySelectorAll('li')];

         liElements.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archiveSectionEl.appendChild(e));
      });

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      articleEl.appendChild(h1);
      articleEl.appendChild(pCategory);
      articleEl.appendChild(pCreator);
      articleEl.appendChild(pContent);
      articleEl.appendChild(div);

      postsSectionEl.appendChild(articleEl);

      authorInputEl.value = '';
      titleInpitEl.value = '';
      categoryInputEl.value = '';
      contentAreaEl.value = '';
   }
}
