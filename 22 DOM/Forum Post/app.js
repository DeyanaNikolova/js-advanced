window.addEventListener("load", solve);

function solve() {
  const reviewListEl = document.getElementById('review-list');
  const publishBtn = document.getElementById('publish-btn');
  const pubishPostEl = document.getElementById('published-list');
  const titleInputEl = document.getElementById('post-title');
  const categoryInputEl = document.getElementById('post-category');
  const contentAreaEl = document.getElementById('post-content');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = titleInputEl.value;
    let category = categoryInputEl.value;
    let content = contentAreaEl.value;

    if (!title || !category || !content) {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('rpost');

    let articleEl = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = title;

    let pCategoryEl = document.createElement('p');
    pCategoryEl.textContent =`Category: ${category}`;

    let pContentEl = document.createElement('p');
    pContentEl.textContent = `Content: ${content}`;
   
    articleEl.appendChild(h4);
    articleEl.appendChild(pCategoryEl);
    articleEl.appendChild(pContentEl);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';

    li.appendChild(articleEl);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);

    reviewListEl.appendChild(li);

    titleInputEl.value = '';
    categoryInputEl.value = '';
    contentAreaEl.value = '';

    editBtn.addEventListener('click', () => {
      titleInputEl.value = title;
      categoryInputEl.value = category;
      contentAreaEl.value = content;
      li.remove();
    });

    approveBtn.addEventListener('click', () => {
      pubishPostEl.appendChild(li);
      editBtn.remove();
      approveBtn.remove();
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
      pubishPostEl.innerHTML = '';
    });
  });
}
