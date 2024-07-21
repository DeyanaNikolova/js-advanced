function solve() {

    const recipientInputEl = document.getElementById('recipientName');
    const titleInputEl = document.getElementById('title');
    const messageInputEl = document.getElementById('message');
    const addBtnEl = document.getElementById('add');
    const resetBtnEl = document.getElementById('reset');
    const listElement = document.getElementById('list');
    const sendMailsEl = document.querySelector('.sent-list');
    const deleteListEl = document.querySelector('.delete-list');


    addBtnEl.addEventListener('click', addMail);
    resetBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        recipientInputEl.value = '';
        titleInputEl.value = '';
        messageInputEl.value = '';
    });

    function addMail(e) {
        e.preventDefault();

        let recipient = recipientInputEl.value;
        let title = titleInputEl.value;
        let message = messageInputEl.value;

        if (!recipient || !title || !message) {
            return;
        }

        let li = document.createElement('li');
        let titleEl = document.createElement('h4');
        titleEl.textContent = `Title: ${title}`;

        let recipientEl = document.createElement('h4');
        recipientEl.textContent = `Recipient Name: ${recipient}`;

        let messageEl = document.createElement('span');
        messageEl.textContent = message;

        let divButtons = document.createElement('div');
        divButtons.setAttribute('id', 'list-action');

        let submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'send');
        submitBtn.textContent = 'Send';

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);

        divButtons.appendChild(submitBtn);
        divButtons.appendChild(deleteBtn);

        li.appendChild(titleEl);
        li.appendChild(recipientEl);
        li.appendChild(messageEl);
        li.appendChild(divButtons);

        listElement.appendChild(li);

        recipientInputEl.value = '';
        titleInputEl.value = '';
        messageInputEl.value = '';

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentNode.parentNode.remove();
            let li = document.createElement('li');
            let spanToEl = document.createElement('span');
            spanToEl.textContent = `To: ${recipient}`;

            let spanTitleEl = document.createElement('span');
            spanTitleEl.textContent = `Title: ${title}`;

            let div = document.createElement('div');
            div.classList.add('btn');

            let delBtn = document.createElement('button');
            delBtn.setAttribute('type', 'submit');
            delBtn.classList.add('delete');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onDelete);

            div.appendChild(delBtn);
            li.appendChild(spanToEl);
            li.appendChild(spanTitleEl);
            li.appendChild(div);
            sendMailsEl.appendChild(li);
            
        });

        function onDelete(e) {
            e.preventDefault();
            e.target.parentNode.parentNode.remove();

            let li = document.createElement('li');
            let toEl = document.createElement('span');
            toEl.textContent = `To: ${recipient}`;

            let titleEl = document.createElement('span');
            titleEl.textContent = `Title: ${title}`;
            li.appendChild(toEl);
            li.appendChild(titleEl);
            deleteListEl.appendChild(li);
        }
    }
}
solve()