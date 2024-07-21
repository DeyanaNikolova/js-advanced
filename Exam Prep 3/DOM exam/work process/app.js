function solve() {
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const bDayInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');

    const bBody = document.getElementById('tbody');
    const salaryEl = document.getElementById('sum');

    let sum = 0;
    document.getElementById('add-worker').addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const bDay = bDayInput.value;
        const position = positionInput.value;
        const salary = Number(salaryInput.value);
       
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        bDayInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';


        if (!firstName || !lastName || !email || !bDay || !position || !salary) {
            return;
        }

        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = firstName;
        const tdLastName = document.createElement('td');
        tdLastName.textContent = lastName
        const tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        const tdBirthDay = document.createElement('td');
        tdBirthDay.textContent = bDay;
        const tdPosition = document.createElement('td');
        tdPosition.textContent = position;
        const tdSalary = document.createElement('td');
        tdSalary.textContent = salary;

        const tdButtons = document.createElement('td');

        const firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fireWorker);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
       editBtn.addEventListener('click', editWorker);

        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);

        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirthDay);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdButtons);

        bBody.appendChild(tr);
        sum += salary;
        salaryEl.textContent = sum.toFixed(2);

        function fireWorker(e) {
            e.target.parentElement.parentElement.remove();
            sum -= salary;
            salaryEl.textContent = sum.toFixed(2);
        }

        function editWorker(e) {
           e.target.parentElement.parentElement.remove();
           sum -= salary;

           firstNameInput.value = firstName;
           lastNameInput.value = lastName;
           emailInput.value = email;
           bDayInput.value = bDay;
           positionInput.value = position;
           salaryInput.value = salary;
   
           salaryEl.textContent = sum.toFixed(2);
        }
    }
}
solve()