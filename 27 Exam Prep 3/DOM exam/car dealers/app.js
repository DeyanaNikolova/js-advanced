window.addEventListener("load", solve);

function solve() {

  const makeInputEl = document.getElementById('make');
  const modelInputEl = document.getElementById('model');
  const yearInputEl = document.getElementById('year');
  const fuelInputEl = document.getElementById('fuel');
  const organisationalCostInputEl = document.getElementById('original-cost');
  const sellingPriceInputEl = document.getElementById('selling-price');

  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishCar);

  const tBody = document.getElementById('table-body');
  const ul = document.getElementById('cars-list');
  const profitEl = document.getElementById('profit');

  let totalProfit = 0;
  let profidMade = 0;

  function publishCar(event) {
    event.preventDefault();

    let make = makeInputEl.value;
    let model = modelInputEl.value;
    let year = yearInputEl.value;
    let fuelType = fuelInputEl.value;
    let orgCost = Number(organisationalCostInputEl.value);
    let sellPrice = Number(sellingPriceInputEl.value);

    if(!make || !model || !year || !fuelType || !orgCost || !sellPrice || orgCost >= sellPrice){
      return;
    }

    const tr = document.createElement('tr');
    tr.className = 'row';

    const tdMake = document.createElement('td');
    tdMake.textContent = make;

    const tdModel = document.createElement('td');
    tdModel.textContent = model;

    const tdYear = document.createElement('td');
    tdYear.textContent = year;

    const tdFuel = document.createElement('td');
    tdFuel.textContent = fuelType;

    const tdCost = document.createElement('td');
    tdCost.textContent = orgCost;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = sellPrice;


    const tdButtons = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
  
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editCar);

    const sellBtn = document.createElement('button');
    sellBtn.className = 'action-btn sell';
   
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sellCar);

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdCost);
    tr.appendChild(tdPrice);
    tr.appendChild(tdButtons);

    tBody.appendChild(tr);

    makeInputEl.value = '';
    modelInputEl.value = '';
    yearInputEl.value = '';
    fuelInputEl.value = '';
    organisationalCostInputEl.value = '';
    sellingPriceInputEl.value = '';


    function editCar(e) {
      
    makeInputEl.value = make;
    modelInputEl.value = model;
    yearInputEl.value = year;
    fuelInputEl.value = fuelType;
    organisationalCostInputEl.value = orgCost;
    sellingPriceInputEl.value = sellPrice;
    tBody.removeChild(tr)
    }

    function sellCar(e) {
      tBody.removeChild(tr);

      const liEl = document.createElement('li');
      liEl.className = 'each-list';
      const spanMake = document.createElement('span');
      spanMake.textContent = `${make} ${model}`;

      const spanYear = document.createElement('span');
      spanYear.textContent = year;

      totalProfit = sellPrice - orgCost;
      const spanProfit = document.createElement('span');
      spanProfit.textContent = totalProfit;

      liEl.appendChild(spanMake);
      liEl.appendChild(spanYear);
      liEl.appendChild(spanProfit);
      ul.appendChild(liEl);
     
      profidMade += totalProfit; 
      profitEl.textContent = profidMade.toFixed(2);
    }
   }
}
