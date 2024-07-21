window.addEventListener('load', solve);

function solve() {
    const productInputEl = document.querySelector('#type-product');
    const descriptionInputEl = document.getElementById('description');
    const nameInputEl = document.getElementById('client-name');
    const phoneInputEl = document.getElementById('client-phone');

    const recievedOrderEl = document.getElementById('received-orders');
    const completedOrdersEl = document.getElementById('completed-orders');
    const sendBtn = document.querySelector('form button');
    sendBtn.addEventListener('click', sendOrder);

    function sendOrder(e) {
        e.preventDefault();

        let productType = productInputEl.value;
        let description = descriptionInputEl.value;
        let name = nameInputEl.value;
        let phone = phoneInputEl.value;

        if (!description || !name || !phone) {
            return;
        }

        const div = document.createElement('div');
        div.className = 'container';

        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;

        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${name}, ${phone}`;

        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;

        const startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.disabled = true;
        finishBtn.textContent = 'Finish repair';

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        recievedOrderEl.appendChild(div);

        productInputEl.value = '';
        descriptionInputEl.value = '';
        nameInputEl.value = '';
        phoneInputEl.value = '';


        startBtn.addEventListener('click', (e) => {
           e.currentTarget.disabled = true;
           finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', (e) =>{
            let containerDiv = e.currentTarget.parentNode;
            e.currentTarget.remove();
            startBtn.remove();
            containerDiv.remove();
            completedOrdersEl.appendChild(containerDiv);

            document.querySelector('.clear-btn').addEventListener('click', () =>{
                containerDiv.remove();
            });
        });   
    }
}