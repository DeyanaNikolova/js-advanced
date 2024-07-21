function solve() {
    const inputElements = Array.from(document.querySelectorAll('.form input'));
    const addWorkerBtn = document.getElementById('add-worker');
    addWorkerBtn.addEventListener('click', addWorker);
    const tBody = document.getElementById('tbody');
    const budgetEl = document.getElementById('sum');

    let sum = 0;
    const workerDetails = {};

    function addWorker(e) {
        e.preventDefault();
        let hasEmptyInput = inputElements.some(x => !x.value);

        if (hasEmptyInput) {
            return;
        }

        let tr = document.createElement('tr');

        inputElements.forEach(x => {
            workerDetails[x.id] = x.value;

            if (x.id == 'salary') {
                sum += Number(x.value);
                budgetEl.textContent = `${sum.toFixed(2)}`;
            }
        });

        Object.keys(workerDetails).forEach(key => {
            let td = document.createElement('td');
            td.textContent = workerDetails[key];
            tr.appendChild(td);
        });

        let tdBtn = document.createElement('td');
        let firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';

        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';

        tdBtn.appendChild(firedBtn);
        tdBtn.appendChild(editBtn);
        tr.appendChild(tdBtn);
        tBody.appendChild(tr);

        inputElements.forEach(x => x.value = '');

        editBtn.addEventListener('click', () => {
            inputElements.forEach(x => {
                x.value = workerDetails[x.id];

                if (x.id == 'salary') {
                    sum -= Number(workerDetails[x.id]);
                    budgetEl.textContent = `${sum.toFixed(2)}`;
                }
            });
            tr.remove();
        });

        firedBtn.addEventListener('click', () => {
            tr.remove();
            Object.keys(workerDetails).forEach(key => {
                if (key == 'salary') {
                    sum -= Number(workerDetails[key]);
                }
            });
            budgetEl.textContent = `${sum.toFixed(2)}`;
        });
    }
}
solve()