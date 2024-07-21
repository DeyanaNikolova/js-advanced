window.addEventListener("load", solve);

function solve() {

  const inputElements = Array.from(document.querySelectorAll('fieldset input, select'));
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);

  const tBodyElement = document.getElementById('table-body');
  const carListElement = document.getElementById('cars-list');
  const profitElement = document.getElementById('profit');

  let totalProfit = 0;
  const carData = {};

  function publish(e) {
    e.preventDefault();

    let hasEmptyInput = inputElements.some(x => !x.value);
    if (hasEmptyInput) {
      return;
    }

    inputElements.forEach(x => {
      carData[x.id] = x.value;
    });

    if (Number(carData['original-cost']) >= Number(carData['selling-price'])) {
      return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    Object.keys(carData).forEach(key => {

      let td = document.createElement('td');
      td.textContent = carData[key];
      tr.appendChild(td);
    });

    let tdButtons = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell')
    sellBtn.textContent = 'Sell';


    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);

    tr.appendChild(tdButtons);
    tBodyElement.appendChild(tr);

    inputElements.forEach(x => x.value = '');

    editBtn.addEventListener('click', (e) => {

      inputElements.forEach(x =>{
        x.value = carData[x.id];
      });

      tBodyElement.removeChild(tr);
    });

    sellBtn.addEventListener('click', (e) => {

      let li = document.createElement('li');
      li.classList.add('each-list');

      let modelSpan = document.createElement('span');
      modelSpan.textContent = `${carData.make} ${carData.model}`;

      let yearSpan = document.createElement('span');
      yearSpan.textContent = carData.year;

      let diffrenceSpan = document.createElement('span');
      
      diffrenceSpan.textContent = Number(carData['selling-price']) - Number(carData['original-cost']);


      totalProfit += Number(carData['selling-price']) - Number(carData['original-cost']);
      profitElement.textContent = totalProfit.toFixed(2);

      li.appendChild(modelSpan);
      li.appendChild(yearSpan);
      li.appendChild(diffrenceSpan);
      carListElement.appendChild(li);

     // Array.from(tBodyElement.childNodes).forEach(x => x.remove());
     tBodyElement.parentNode.remove();
    });
  }
}
