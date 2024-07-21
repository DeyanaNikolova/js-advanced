function focused() {
 let inputElements = document.querySelectorAll('input');
 inputs = Array.from(inputElements).forEach(i => {
    i.addEventListener('focus', onFocus);
    i.addEventListener('blur', onBlur);
 });
 function onFocus(e) {
    e.target.parentElement.className = 'focused';
 }
 function onBlur(e) {
    e.target.parentElement.className = '';
 }

}

// Array.from(document.querySelectorAll('input'))
// .forEach(i => {
//     i.addEventListener('focus', onFocus);
//     i.addEventListener('blur', onBlur);
// });

// function onFocus(event) {
// event.target.parentElement.className = 'focused';
// }

// function onBlur(event) {
// event.target.parentElement.className = '';
// }