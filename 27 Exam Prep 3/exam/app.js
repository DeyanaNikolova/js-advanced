window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateUotInput = document.getElementById('date-out');
    const countInput = document.getElementById('people-count');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onSubmit);

    const reservationList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const reservationEl = document.getElementById('complete-reservation');
    const verificationEl = document.getElementById('verification');

    function onSubmit(event) {
        event.preventDefault();
        nextBtn.disabled = 'true';
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const dateIn = dateInInput.value;
        const dateOut = dateUotInput.value;
        const count = countInput.value;


        if (!firstName || !lastName || !dateIn || !dateOut || !count) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'reservation-content';

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;

        const pFrom = document.createElement('p');
        pFrom.textContent = `From date: ${dateIn}`;

        const pTo = document.createElement('p');
        pTo.textContent = `To date: ${dateOut}`;

        const pFor = document.createElement('p');
        pFor.textContent = `For ${count} people`;

        article.appendChild(h3);
        article.appendChild(pFrom);
        article.appendChild(pTo);
        article.appendChild(pFor);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.disabled = false;
        editBtn.addEventListener('click', editReservation);

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.disabled = false;
        continueBtn.addEventListener('click', conttinueReservation);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        reservationList.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateUotInput.value = '';
        countInput.value = '';

        function editReservation(event) {
            nextBtn.disabled = false;
            event.target.disabled = true;
            event.target.style.disabled = true;

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = dateIn;
            dateUotInput.value = dateOut;
            countInput.value = count;

            event.target.parentElement.remove();
        }

        function conttinueReservation(event) {
            event.target.parentElement.remove();
            event.target.disabled = true;
            nextBtn.disabled = true;

            const li = document.createElement('li');
            li.className = 'reservation-content';

            const article = document.createElement('article');

            const h3 = document.createElement('h3');
            h3.textContent = `Name: ${firstName} ${lastName}`;

            const pFrom = document.createElement('p');
            pFrom.textContent = `From date: ${dateIn}`;

            const pTo = document.createElement('p');
            pTo.textContent = `To date: ${dateOut}`;

            const pFor = document.createElement('p');
            pFor.textContent = `For ${count} people`;

            article.appendChild(h3);
            article.appendChild(pFrom);
            article.appendChild(pTo);
            article.appendChild(pFor);


            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';
            confirmBtn.addEventListener('click', confirmReservation);

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', cancelReservation);

            li.appendChild(article);
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);
            confirmList.appendChild(li);

        }

        function confirmReservation(event) {
            event.target.parentElement.remove();
            nextBtn.disabled = false;
            verificationEl.textContent = 'Confirmed.';
            verificationEl.className = 'reservation-confirmed'
            reservationEl.appendChild(verificationEl);
        }

        function cancelReservation(event) {
            event.target.parentElement.remove();
            nextBtn.disabled = false;
            verificationEl.textContent = 'Cancelled.';
            verificationEl.className = 'reservation-cancelled'
            reservationEl.appendChild(verificationEl);
        }
    }
}





