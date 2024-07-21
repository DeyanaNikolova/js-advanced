function validate() {
    let inputEmailElement = document.getElementById('email');
    inputEmailElement.addEventListener('change', (e) => {

        let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

        if(pattern.test(inputEmailElement.value)){
            e.target.classList.remove('error');
        }else{
            e.target.classList.add('error');
        }
    });
}

// let inputElement = document.getElementById('email');
// inputElement.addEventListener('change', (e)=>{
//     let pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

//     if(pattern.test(inputElement.value)){
// e.target.classList.remove('error');
//     }else{
//         e.target.classList.add('error')
//     }
// });