function addItem() {
 
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
  
    let optionElement = document.createElement('option');
    optionElement.textContent = inputText.value;
    optionElement.value = inputValue.value;

    menuElement.appendChild(optionElement);

    inputText.value = '';
    inputValue.value = '';
}
