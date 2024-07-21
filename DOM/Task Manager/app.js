function solve() {
    const taskInputEl = document.getElementById('task');
    const descriptionAreaEl = document.getElementById('description');
    const dueDateInputEl = document.getElementById('date');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addArticle);

    const openEl = document.querySelector('section:nth-child(2) div:nth-child(2)');
    const inProgressEl = document.getElementById('in-progress');
    const completeEl = document.querySelector('section:nth-child(4) div:nth-child(2)');

    function addArticle(e) {
        e.preventDefault();

        let task = taskInputEl.value;
        let description = descriptionAreaEl.value;
        let date = dueDateInputEl.value;

        if (!task || !description || !date) {
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        const div = document.createElement('div');
        div.className = 'flex';

        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', start);


        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);


        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        openEl.appendChild(article);

        function start() {

            div.removeChild(startBtn);

            const finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finish);

            div.appendChild(finishBtn);
            article.appendChild(div);
            inProgressEl.appendChild(article);
        }

        function onDelete(e) {
            e.target.parentNode.parentNode.remove();
        }

        function finish() {
        article.removeChild(div);
        completeEl.appendChild(article);
        }
    }
}