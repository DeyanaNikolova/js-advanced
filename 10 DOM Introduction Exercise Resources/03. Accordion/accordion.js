function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let divElement = document.getElementById('extra');

    if(button.textContent == 'More'){
        divElement.style.display = 'block';
        button.textContent = 'Less';

    }else if(button.textContent == 'Less'){
        divElement.style.display = 'none';
        button.textContent = 'More';
    }

//     let button = document.querySelector('.button');
// if(button.textContent === 'Less'){
//     button.textContent = 'More';
// }else{
//     button.textContent = 'Less';
// }
// let text = document.querySelector('#extra');
// if(text.style.display === 'block'){
//     text.style.display = 'none';
// }else{
//     text.style.display = 'block';
// }
}