window.addEventListener('load', solve);

function solve() {

    let recipientInput = document.getElementById('recipientName').value;
    
    let titleInput = document.getElementById('title').value;
    let messageInput = document.getElementById('message').value;

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addToList);

    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);

    let listMails = document.getElementById('list');
    let sentMails = document.querySelector('.sent-list');
    let deletedMails = document.querySelector('.delete-list');
   
   function addToList(e){
       // e.target.preventDefault();

        if (recipientInput == '' || titleInput.value == '' || messageInput == '') {
            return
        }else{

            let li = document.createElement('li');
            let title = document.createElement('h4');
            title.textContent = `Title: ${titleInput}`;

            let recipient = document.createElement('h4');
            recipient.textContent = `Recipient name: ${recipientInput}`;

            let span = document.createElement('span');
            span.textContent = messageInput;

            let div = document.createElement('div');
            div.setAttribute("id","list-action");

            let sendBtn = document.createElement('button');
            sendBtn.setAttribute("id","send");
            sendBtn.textContent = 'Send';
            sendBtn.type = 'submit';
            sendBtn.addEventListener('click', sendMail)

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute("id","delete");
            deleteBtn.textContent = 'Delete';
            deleteBtn.type = 'submit';

            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);

            li.appendChild(title);
            li.appendChild(recipient);
            li.appendChild(span);
            li.appendChild(div);
            listMails.appendChild(li);
        } 
    }

   function reset(e) {
   // e.target.preventDefault();
    recipientInput = '';
    titleInput = '';
    messageInput = '';
   }

   function sendMail() {
    listMails.remove()
    let li = documen.createElement('li');
    let spanTo = document.createElement('span');

    spanTo.textContent = `To: ${recipientInput}`;
    let spanTitle = document.createElement('span');
    spanTitle.textContent = `Title: ${titleInput}`;

    let div = document.createElement('div');
    div.setAttribute("cllass", "btn");

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.type = "submit";
    deleteBtn.addEventListener('click', onDelete);

    div.appendChild(deleteBtn);
    li.appendChild(spanTo);
    li.appendChild(spanTitle);
    li.appendChild(div);

    sentMails.appendChild(li);
   }
  
   function onDelete() {
    let li = documen.createElement('li');

    let spanTo = document.createElement('span');
    spanTo.textContent = `To: ${recipientInput}`;
    let spanTitle = document.createElement('span');
    spanTitle.textContent = `Title: ${titleInput}`;

    li.appendChild(spanTo);
    li.appendChild(spanTitle);
    deletedMails.appendChild(li)

    listMails.remove();
    sentMails.remove()
   }


}
solve()