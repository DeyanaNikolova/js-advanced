function solution() {
    const giftNameInputEl = document.querySelector('input');
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addGift);

    const listOfGiftsEl = document.querySelector('.card ul');
    const sentGiftsEl = document.querySelector('div section:nth-child(3) ul');
    const discardedGiftsEl = document.querySelector('div section:nth-child(4) ul');

    function addGift(e) {
        e.preventDefault();
        let giftName = giftNameInputEl.value;

        const li = document.createElement('li');
        li.className = 'gift';
        li.textContent = giftName;

        const sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sendGift);

        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', discardGift);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        listOfGiftsEl.appendChild(li);

    
        const liElements = [...listOfGiftsEl.querySelectorAll('li')];
        liElements.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => listOfGiftsEl.appendChild(e));

        giftNameInputEl.value = '';

        function sendGift() {
            li.removeChild(sendBtn);
            li.removeChild(discardBtn);

            sentGiftsEl.appendChild(li);

            const liElements = [...sentGiftsEl.querySelectorAll('li')];
            liElements.sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(e => sentGiftsEl.appendChild(e));
        }

        function discardGift(e) {
            e.target.parentElement.remove();
            li.removeChild(sendBtn);
            li.removeChild(discardBtn);
            discardedGiftsEl.appendChild(li);
        }
    }
}