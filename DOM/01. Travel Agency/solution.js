window.addEventListener('load', solution);

function solution() {
const submitBtn = document.getElementById('submitBTN');
const editBtn = document.getElementById('editBTN');
const continueBtn = document.getElementById('continueBTN');
const preview = document.getElementById('infoPreview');
const block = document.getElementById('block');
  
submitBtn.disabled = false;
editBtn.disabled = true;
continueBtn.disabled = true;

const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'))
inputValues.pop();
const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));

submitBtn.addEventListener('click', (e) =>{

  const fullName = inputValues[0];
  const email = inputValues[1];

  if(fullName.value !== '' && email.value !== ''){
    
    for(let i = 0; i < inputValues.length; i++){
      const liElement = document.createElement('li');
      liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
      preview.appendChild(liElement);
  }

  for(let input of inputValues){
    input.value = '';
  }

  e.target.disabled = true;
  editBtn.disabled = false;
  continueBtn.disabled = false;
       
    }
  
 });

 editBtn.addEventListener('click', (e)=>{
  const listItems = Array.from(preview.childNodes);

  for(let i = 0; i < inputValues.length; i++){
    inputValues[i].value = listItems[i].textContent.split(': ')[1];
    listItems[i].remove();
  }
  submitBtn.disabled = false;
editBtn.disabled = true;
continueBtn.disabled = true;

 });

 continueBtn.addEventListener('click', (e) =>{
block.innerHTML = '';

let h3 = document.createElement('h3');
h3.textContent = 'Thank you for your reservation!';
block.appendChild(h3);
 });
}




// Solution 2 


// const inputFullNameElement = document.getElementById('fname');
// const inputEmailElement = document.getElementById('email');
// const inputPhoneElement = document.getElementById('phone');
// const inputAddressElement = document.getElementById('address');
// const inputPostalCodeElement = document.getElementById('code');

// const infoPreviewElement = document.getElementById('infoPreview');  //ul
// const editBtn = document.getElementById('editBTN');
// const continueBtn = document.getElementById('continueBTN');
// const blockElement = document.getElementById('block');


// const submitBtn = document.getElementById('submitBTN');
// submitBtn.addEventListener('click', (e) =>{
//   e.preventDefault();

//   let fullName = inputFullNameElement.value;
//   let email = inputEmailElement.value;
//   let phoneNumber = inputPhoneElement.value;
//   let address = inputAddressElement.value;
//   let postCode = inputPostalCodeElement.value;

//   if(!fullName && !email){
//     return;
//   }

//   let nameLiEl = document.createElement('li');
//   nameLiEl.textContent = `Full Name: ${fullName}`;

//   let emailLiEl = document.createElement('li');
//   emailLiEl.textContent = `Email: ${email}`;
  
//   let phoneLiEl = document.createElement('li');
//   phoneLiEl.textContent = `Phone Number: ${phoneNumber}`;

//   let addressLiEl = document.createElement('li');
//   addressLiEl.textContent = `Address: ${address}`;

//   let postCodeLiEl = document.createElement('li');
//   postCodeLiEl.textContent = `Postal Code: ${postCode}`;

//   infoPreviewElement.appendChild(nameLiEl);
//   infoPreviewElement.appendChild(emailLiEl);
//   infoPreviewElement.appendChild(phoneLiEl);
//   infoPreviewElement.appendChild(addressLiEl);
//   infoPreviewElement.appendChild(postCodeLiEl);

//   e.target.disabled = true;
//   editBtn.disabled = false;
//   continueBtn.disabled = false;

//   inputFullNameElement.value = '';
//   inputEmailElement.value = '';
//   inputPhoneElement.value = '';
//   inputAddressElement.value = '';
//   inputPostalCodeElement.value = '';


//   editBtn.addEventListener('click', (e) =>{

//     inputFullNameElement.value = fullName;
//     inputEmailElement.value = email;
//     inputPhoneElement.value = phoneNumber;
//     inputAddressElement.value = address;
//     inputPostalCodeElement.value = postCode;

//     e.target.disabled = true;
//     continueBtn.disabled = true;
//     submitBtn.disabled = false;

//     Array.from(infoPreviewElement.childNodes).forEach(x => x.remove());
//   });
// });

// continueBtn.addEventListener('click', (e)=>{
//   blockElement.innerHTML = '';

//   let h3 = document.createElement('h3');
//   h3.textContent = 'Thank you for your reservation!';
//   blockElement.appendChild(h3);
// });
