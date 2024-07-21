window.addEventListener("load", solve);

function solve() {

  const firstNameInputEl = document.getElementById('first-name');
  const lastNameInputEl = document.getElementById('last-name');
  const ageInputEl = document.getElementById('age');
  const genderInputEl = document.getElementById('genderSelect');
  const dishInfoInputEl = document.getElementById('task');

  const inProgtessEl = document.getElementById('in-progress');
  const progressCountEl = document.getElementById('progress-count');
  const finishedCookingEl = document.getElementById('finished');
  let dishCount = 0;

  document.getElementById('form-btn').addEventListener('click', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    dishCount++;

    const firstName = firstNameInputEl.value;
    const lastName = lastNameInputEl.value;
    const age = Number(ageInputEl.value);
    const gender = genderInputEl.value;
    const dishInfo = dishInfoInputEl.value;

    if(!firstName || !lastName || !age || !dishInfo){
      return;
    }

    const li = document.createElement('li');
    li.className = 'each-line';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `${firstName} ${lastName}`;

    const pGender = document.createElement('p');
    pGender.textContent = `${gender}, ${age}`;

    const pDishInfo = document.createElement('p');
    pDishInfo.textContent = `Dish description: ${dishInfo}`;

    article.appendChild(h4);
    article.appendChild(pGender);
    article.appendChild(pDishInfo);

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editDish);

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as complete';
    completeBtn.addEventListener('click', onComplete);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    inProgtessEl.appendChild(li);

    progressCountEl.textContent = dishCount;
   

    firstNameInputEl.value = '';
    lastNameInputEl.value = '';
    ageInputEl.value = '';
    dishInfoInputEl.value = '';

    function editDish(e) {
      e.target.parentElement.remove();
      dishCount--;
      firstNameInputEl.value = firstName;
      lastNameInputEl.value = lastName;
      ageInputEl.value = age;
      genderInputEl.value = gender;
      dishInfoInputEl.value = dishInfo;

      progressCountEl.textContent = dishCount;
    }

    function onComplete(e) {
      e.target.parentElement.remove();
      dishCount--;
      const li = document.createElement('li');
      li.className = 'each-line';
  
      const article = document.createElement('article');
  
      const h4 = document.createElement('h4');
      h4.textContent = `${firstName} ${lastName}`;
  
      const pGender = document.createElement('p');
      pGender.textContent = `${gender}, ${age}`;
  
      const pDishInfo = document.createElement('p');
      pDishInfo.textContent = `Dish description: ${dishInfo}`;
  
      article.appendChild(h4);
      article.appendChild(pGender);
      article.appendChild(pDishInfo);

      li.appendChild(article);
      finishedCookingEl.appendChild(li);
      progressCountEl.textContent = dishCount;
    }

    document.getElementById('clear-btn').addEventListener('click', (e) =>{
      finishedCookingEl.innerHTML = '';
    });
  }
}
