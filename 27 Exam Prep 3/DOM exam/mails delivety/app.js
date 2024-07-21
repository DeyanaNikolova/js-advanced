function solve() {

    const recipientInputEl = document.getElementById('recipientName');
    const titleInputEl = document.getElementById('title');
    const messageInputEl = document.getElementById('message');

    const listOfMails = document.getElementById('list');
    const sentMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list');

    document.getElementById('add').addEventListener('click', addMail);

    document.getElementById('reset').addEventListener('click', (e) => {
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

        const li = document.createElement('li');

        const titleEl = document.createElement('h4');
        titleEl.textContent = `Title: ${title}`;

        const recipientEl = document.createElement('h4');
        recipientEl.textContent = `Recipient Name: ${recipient}`;

        const messageEl = document.createElement('span');
        messageEl.textContent = message;

        const div = document.createElement('div');
        div.id = 'list-action';

        const sendBtnEl = document.createElement('button');
        sendBtnEl.type = 'submit';
        sendBtnEl.id = 'send';
        sendBtnEl.textContent = 'Send';
        sendBtnEl.addEventListener('click', sendMail);

        const delBtnEl = document.createElement('button');
        delBtnEl.type = 'submit';
        delBtnEl.id = 'delete';
        delBtnEl.textContent = 'Delete';
        delBtnEl.addEventListener('click', deleteMail);

        div.appendChild(sendBtnEl);
        div.appendChild(delBtnEl);

        li.appendChild(titleEl);
        li.appendChild(recipientEl);
        li.appendChild(messageEl);
        li.appendChild(div);

        listOfMails.appendChild(li);

        recipientInputEl.value = '';
        titleInputEl.value = '';
        messageInputEl.value = '';

        function sendMail(e) {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();

            const li = document.createElement('li');

            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${title}`;

            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            const div = document.createElement('div');
            div.className = 'btn';

            const delBtnEl = document.createElement('button');
            delBtnEl.type = 'submit';
            delBtnEl.className = 'delete';
            delBtnEl.textContent = 'Delete';
            delBtnEl.addEventListener('click', deleteMail);
            div.appendChild(delBtnEl);

            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            li.appendChild(div);

            sentMails.appendChild(li);

        }

        function deleteMail(e) {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();

            const li = document.createElement('li');

            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${title}`;

            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            li.appendChild(spanTo);
            li.appendChild(spanTitle);

            deletedMails.appendChild(li);
        }
    }
}


solve()