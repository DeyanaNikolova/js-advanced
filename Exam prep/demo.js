let recipientNameElement = document.getElementById('recipientName');
let titleElement = document.getElementById('title');
let messageElement = document.getElementById('message');

let addBtn = document.getElementById('add');
addBtn.textContent = 'Add to the List';
addBtn.addEventListener('click', addToList);
let resetBtn = document.getElementById('reset');
resetBtn.textContent = 'Reset';
// resetBtn.addEventListener('click', reset);

let listOfMailsElement = document.getElementById('list');
let sentMailsElement = document.querySelector('#sent');
let deletedMailsElement = document.querySelector('#delete');


function addToList(e) {
    e.preventDefault();
  
    let recipientName = recipientNameElement.value;
    let title = titleElement.value;
    let message = messageElement.value;
    if (!recipientName || !title || !message) {
        return;
    }

    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    h4.textContent = `Recipient name: ${recipientName}`;
    h4.textContent = `Title: ${title}`;
    // let h5 = document.createElement('h5');
    // h5.textContent = `Recipient name: ${recipientName}`;
   
    let span = document.createElement('span');
    span.textContent = message;
    let divAction = document.createElement('div');
    divAction.setAttribute('id','list-action');
    let sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    sendBtn.type = 'submit';
    sendBtn.setAttribute('id', 'send');
   // sendBtn.addEventListener('click', send);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.type = 'submit';
    deleteBtn.setAttribute('id', 'delete');
   // deleteBtn.addEventListener('click', onDelete);
    divAction.appendChild(sendBtn);
    divAction.appendChild(deleteBtn);
    li.appendChild(h4);
   // li.appendChild(h5);
    li.appendChild(span);
    li.appendChild(divAction);

    listOfMailsElement.appendChild(li);
  
}

function reset(e) {
   // e.preventDefault;
    recipientName.value = '';
    title.value = '';
    message.value = '';
    //e.currentTarget.remove()
}

function send(e) {

    
}

function onDelete(e) {

}