window.addEventListener("load", solve);

function solve() {
  const inputTitleEl = document.getElementById('post-title');
  const inputCategoryEl = document.getElementById('post-category');
  const inputContentEl = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn')
  publishBtn.addEventListener('click', addPost);
  const reviewListEl = document.getElementById('review-list');


  function addPost(ev) {
    ev.preventDefault();

    if (inputTitleEl.value !== '' && inputCategoryEl.value !== '' && inputContentEl !== '') {
      const li = document.createElement('li');
      li.setAttribute("class", "rpost");

      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.textContent = inputTitleEl.value;

      const p1 = document.createElement('p');
      p1.textContent = `Category: ${inputCategoryEl.value}`;

      const p2 = document.createElement('p');
      p2.textContent = `Content: ${inputContentEl.value}`;

      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);

      const editBtn = document.createElement('button');
      editBtn.setAttribute("class", "action-btn edit");
      editBtn.textContent = 'Edit';
      editBtn.addEventListener("click",(ev) => editPost(ev, inputTitleEl, inputCategoryEl, inputContentEl));


      const approveBtn = document.createElement('button');
      approveBtn.setAttribute("class", "action-btn approve");
      approveBtn.textContent = 'Approve';
      approveBtn.addEventListener("click", (ev) => approvePost(ev, article));


      li.appendChild(editBtn);
      li.appendChild(approveBtn);

      reviewListEl.appendChild(li);

    }

    inputTitleEl.value = '';
    inputCategoryEl.value = '';
    inputContentEl.value = ''

    if (reviewListEl.children.length !== 0) {
      reviewListEl.style.display = 'none';
    }
   
  }
  function editPost(ev, _inputTitleEl, _inputCategoryEl, _inputContentEl) {
   ev.target.parentNode.remove();

    inputTitleEl.value = _inputTitleEl.value;
    inputCategoryEl.value = _inputCategoryEl.value;
    inputContentEl.value = _inputContentEl.value;

   
  }

  function approvePost(ev, artivle) {

  }

}
