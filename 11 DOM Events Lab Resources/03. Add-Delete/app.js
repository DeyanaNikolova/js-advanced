function addItem() {

    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    inputElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
       // liElement.remove();
    });

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);
}


    // const input = document.getElementById('newItemText');

    // const liElement = document.createElement('li');
    // liElement.textContent = input.value;

    // const deleteBtn = document.createElement('a');
    // deleteBtn.textContent = '[Delete]';
    // deleteBtn.href = '#';
    // liElement.appendChild(deleteBtn);
    // deleteBtn.addEventListener('click', onDelete)

    // document.getElementById('items').appendChild(liElement);
    // input.value = '';

    // function onDelete(event) {
    //     event.target.parentElement.remove();
    // }

    // let itemsElement = document.getElementById('items');
    // let inputElement = document.getElementById('newItemText');

    // let liElement = document.createElement('li');
    // liElement.textContent = inputElement.value;
    // inputElement.value = '';

    // let deleteElement = document.createElement('a');
    // deleteElement.href = '#';
    // deleteElement.textContent = '[Delete]';
    // deleteElement.addEventListener('click', (e) => {
    //     e.currentTarget.parentElement.remove();
    // })

    // liElement.appendChild(deleteElement);
    // itemsElement.appendChild(liElement);



