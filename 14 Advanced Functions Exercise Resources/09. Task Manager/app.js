function solve() {

    let addBtn = document.getElementById('add')
    addBtn.addEventListener('click', add);
    let [_, open, inProgress, complete] = Array.from(document.querySelectorAll('section'))
    .map(e => e.children[1]);


    function add(e) {
        e.preventDefault();
       let task = document.getElementById('task');
       let description = document.getElementById('description');
       let date = document.getElementById('date');

       let article = document.createElement('article');
       let h3 = document.createElement('h3');
       h3.textContent = task.value;

       let p1 = document.createElement('p');
       p1.textContent = `Description: ${description.value}`;

       let p2 = document.createElement('p');
       p2.textContent = `Due Date: ${date.value}`;

       let startBtn = document.createElement('button');
       startBtn.textContent  = 'Start';
       startBtn.className = 'green';

       let deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Delete';
       deleteBtn.className = 'red';

       let finishBtn = document.createElement('button');  
       finishBtn.textContent = 'Finish'; 
       finishBtn.className = 'orange';

       article.appendChild(h3);
       article.appendChild(p1);
       article.appendChild(p2);

       let div = document.createElement('div');
       div.className = 'flex';
       div.appendChild(startBtn);
       div.appendChild(deleteBtn);

       article.appendChild(div);
       open.appendChild(article);

       task.value = '';
       description.value = '';
       date.value = '';

       startBtn.addEventListener('click', onStart);
       deleteBtn.addEventListener('click', onDelete);
       finishBtn.addEventListener('click', onFinish);

       function onStart() {
        startBtn.remove();
        div.appendChild(finishBtn);
        inProgress.appendChild(article);  
       }

       function onDelete() {
        article.remove()
       }

       function onFinish() {
        div.remove();
        complete.appendChild(article);
       }
    }


    // Solution 2 Viktor Kostadinov

    // const input = {
    //     name: document.getElementById('task'),
    //     description: document.getElementById('description'),
    //     date:  document.getElementById('date')
    // };
    
    // document.getElementById('add').addEventListener('click', addTask);
    // const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section'))
    // .map(e => e.children[1]);
    
    // function addTask(event) {
    //     event.preventDefault();
    
    //     const article = document.createElement('article');
    //     article.appendChild(createElement('h3',input.name.value));
    //     article.appendChild(createElement('p', `Description: ${input.description.value}`));
    //     article.appendChild(createElement('p', `Due Date: ${input.date.value}`));
    
    //     const div = createElement('div', '', 'flex');
       
    //     const startBtn = createElement('button', 'Start', 'green');
    //     const deleteBtn = createElement('button', 'Delete', 'red');
    //     const finishBtn = createElement('button', 'Finish', 'orange');
    //     div.appendChild(startBtn);
    //     div.appendChild(deleteBtn);
    
    //     article.appendChild(div);
    //     openSection.appendChild(article);
    
    //    Object.values(input).forEach(i => i.value = '');
    
    //    startBtn.addEventListener('click', onStart);
    //    deleteBtn.addEventListener('click', onDelete);
    //    finishBtn.addEventListener('click', onFinish);
      
    //    function onDelete() {
    //     article.remove();
    //    }
    
    //    function onStart() {
    //     startBtn.remove();
    //     div.appendChild(finishBtn);
    //     progressSection.appendChild(article);
    //    }
    
    //    function onFinish() {
    //     div.remove();
    //     finishSection.appendChild(article);
    //    }
    // }
    
    // function createElement(type, content, className) {
    //     const element = document.createElement(type);
    //     element.textContent = content;
    //     if(className){
    //         element.className = className;
    //     }
    //     return element;
    // }
}