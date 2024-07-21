window.addEventListener("load", solve);

function solve() {

  let sendBtnElement = document.querySelector('#right form button');
  sendBtnElement.addEventListener('click', sendInfo);
  //  Elements - input fielsd
  let productTypeSelectElement = document.querySelector('#type-product');
  let descriptionTextAreaElemelt = document.querySelector('#description');
  let clientNameInputElement = document.querySelector('#client-name');
  let clientPhoneInputElement = document.querySelector('#client-phone');
  //
  let recievedOrdersElement = document.querySelector('#received-orders');
  let completedOrdersElement = document.querySelector('#completed-orders');

let clearBtnElement = document.querySelector('#completed-orders button');
clearBtnElement.addEventListener('click', clearOrders);

  function sendInfo(e) {
    e.preventDefault();
    // Values of the elements
    let productType = productTypeSelectElement.value;
    let description = descriptionTextAreaElemelt.value;
    let clientName = clientNameInputElement.value;
    let clientPhone = clientPhoneInputElement.value;

    // If any of them are empty, the program should not do anything 
    if (description == '' || clientName == '' || clientPhone == '') {
      return;
    }
    // and then clear input fields    
    productTypeSelectElement.value = '';
    descriptionTextAreaElemelt.value = '';
    clientNameInputElement.value = '';
    clientPhoneInputElement.value = '';

    //When you click the ["Send form"] button, the information from the input fields must be added to the section with the id "received-orders" 

    // create HTML elements in recieved-order section
    let containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');

    let h2Element = document.createElement('h2');
    h2Element.textContent = `Product type for repair: ${productType}`;

    let h3Element = document.createElement('h3');
    h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;

    let h4Element = document.createElement('h4');
    h4Element.textContent = `Description of the problem: ${description}`;

    // create buttons
    let startBtn = document.createElement('button');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'Start repair';

    let finishBtn = document.createElement('button');
    finishBtn.classList.add('finish-btn');
    finishBtn.textContent = 'Finish repair';
    finishBtn.disabled = true; // sets shinish btn to be disabled

    //add events to buttons
    startBtn.addEventListener('click',startRepair);
    finishBtn.addEventListener('click', finishRepair);

    // append elements to each other , create tree
    containerDivElement.appendChild(h2Element);
    containerDivElement.appendChild(h3Element);
    containerDivElement.appendChild(h4Element);
    containerDivElement.appendChild(startBtn);
    containerDivElement.appendChild(finishBtn);

    recievedOrdersElement.appendChild(containerDivElement);
  }

  function startRepair(e) {
    // disable start btn
    e.currentTarget.disabled = true;
    // activate finish btn
    e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
  }

  function finishRepair(e) {
    let containerDiv = e.currentTarget.parentNode;
    // remove two buttons
    e.currentTarget.remove();
    containerDiv.querySelector('.start-btn').remove();
 // remove containerDiv from recieved orders, append to completed orders
    containerDiv.remove();
    completedOrdersElement.appendChild(containerDiv);
  }

  function clearOrders(e) {
    // take all containers
    let allContainers = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'));
    // delete all containers
    for(let container of allContainers){
      container.remove();
    }
  }
}
