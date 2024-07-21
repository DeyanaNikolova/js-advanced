window.addEventListener('load', solve);

function solve() {

    const addBtn = document.getElementById('add');
    const modelEl = document.getElementById('model');
    const yearEl = document.getElementById('year');
    const descriptionEl = document.getElementById('description');
    const priceEl = document.getElementById('price');
    const furnitureListEl = document.getElementById('furniture-list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelEl.value;
        let description = descriptionEl.value;
        let year = Number(yearEl.value);
        let price = Number(priceEl.value);

        if (!model || !description) {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');

        let moreInfoBtnElement = document.createElement('button');
        let buyItBtnElement = document.createElement('button');
        let totalPriceElement = document.querySelector('.total-price');

        let infoRowElement = document.createElement('tr');
        infoRowElement.classList.add('hide');
        infoRowElement.style.display = 'none';

        let yearCellElement = document.createElement('td');
        yearCellElement.textContent = `Year: ${year}`;

        let descriptionCellElement = document.createElement('td');
        descriptionCellElement.setAttribute('colspan', 3);
        descriptionCellElement.textContent = `Description: ${description}`;

        priceCellElement.textContent = price.toFixed(2);
        modelCellElement.textContent = model;

        rowElement.classList.add('info');

        moreInfoBtnElement.textContent = 'More Info';
        moreInfoBtnElement.classList.add('moreBtn');
        moreInfoBtnElement.addEventListener('click', (e) =>{

            if(e.currentTarget.textContent == 'More Info'){
                infoRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else{
                infoRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        buyItBtnElement.textContent = 'Buy it';
        buyItBtnElement.classList.add('buyBtn');
        buyItBtnElement.addEventListener('click', (e) =>{

           let currentTotalPrice =  Number(totalPriceElement.textContent);
           let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();
            infoRowElement.remove();
        });

        actionsCellElement.appendChild(moreInfoBtnElement);
        actionsCellElement.appendChild(buyItBtnElement);

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        infoRowElement.appendChild(yearCellElement);
        infoRowElement.appendChild(descriptionCellElement);

        furnitureListEl.appendChild(rowElement);  
        furnitureListEl.appendChild(infoRowElement);
    });
}
