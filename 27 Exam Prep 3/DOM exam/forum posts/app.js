window.addEventListener("load", solve);

function solve() {

  const titleInputEl = document.getElementById('post-title');
  const categoryInputEl = document.getElementById('post-category');
  const contentInputEl = document.getElementById('post-content');

  const publishedPosts = document.getElementById('published-list');
 

  document.getElementById('publish-btn').addEventListener('click', publishPost);

  function publishPost(e) {
    e.preventDefault();

    const title = titleInputEl.value;
    const category = categoryInputEl.value;
    const content = contentInputEl.value;

    if (!title || !category || !content) {
      return;
    }

    const li = document.createElement('li');
    li.className = 'rpost';

    const article = document.createElement('article');


    const h4 = document.createElement('h4');
    h4.textContent = title;

    const pCategoty = document.createElement('p');
    pCategoty.textContent = `Category: ${category}`;

    const pContent = document.createElement('p');
    pContent.textContent = `Content: ${content}`;

    article.appendChild(h4);
    article.appendChild(pCategoty);
    article.appendChild(pContent);

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editPost);

    const approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', approvePost);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    document.getElementById('review-list').appendChild(li);

    titleInputEl.value = '';
    categoryInputEl.value = '';
    contentInputEl.value = '';

    function editPost(e) {
      e.target.parentElement.remove();
      titleInputEl.value = title;
      categoryInputEl.value = category;
      contentInputEl.value = content;

    }

    function approvePost(e) {
      e.target.parentElement.remove();

      const li = document.createElement('li');
      li.className = 'rpost';

      const article = document.createElement('article');

      const h4 = document.createElement('h4');
      h4.textContent = title;

      const pCategoty = document.createElement('p');
      pCategoty.textContent = `Category: ${category}`;

      const pContent = document.createElement('p');
      pContent.textContent = `Content: ${content}`;

      article.appendChild(h4);
      article.appendChild(pCategoty);
      article.appendChild(pContent);

      li.appendChild(article);

      publishedPosts.appendChild(li);

      document.getElementById('clear-btn').addEventListener('click', () => {
        publishedPosts.innerHTML = '';
      });
    }
  }
}
