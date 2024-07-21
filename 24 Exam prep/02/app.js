window.addEventListener('load', solve);

function solve() {
    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addClick);

    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');

    function addClick(e) {
        e.preventDefault();
        console.log('btton clicked');

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);
        let furnitureList = document.getElementById('furniture-list');


        if (!model || !description) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }
        let rowElement = document.createElement('tr');
        rowElement.classList.add('info');
        let modelTdElement = document.createElement('td');
        modelTdElement.textContent = model;

        let priceTdElement = document.createElement('td');
        priceTdElement.textContent = price.toFixed(2);
        let contentRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        let actionTdElement = document.createElement('td');
        let infoBtn = document.createElement('button');
        infoBtn.classList.add('moreBtn');
        infoBtn.textContent = 'More Info';
        infoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
           buyBtn.addEventListener('click', (e) =>{
            let currentTotalprice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalprice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            rowElement.remove();
            contentRowElement.remove();
           });

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        actionTdElement.appendChild(infoBtn);
        actionTdElement.appendChild(buyBtn);

        rowElement.appendChild(modelTdElement);
        rowElement.appendChild(priceTdElement);
        rowElement.appendChild(actionTdElement);
        furnitureList.appendChild(rowElement);

        contentRowElement.classList.add('hide');
        contentRowElement.style.display = 'none';
        contentRowElement.appendChild(yearContentElement);
        contentRowElement.appendChild(descriptionContentElement);
        furnitureList.appendChild(contentRowElement);

    }
}
