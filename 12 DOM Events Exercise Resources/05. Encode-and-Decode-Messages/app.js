function encodeAndDecodeMessages() {

    let buttons = document.querySelectorAll('#main button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    let textAreas = document.querySelectorAll('textarea');

    function encode(e) {
        let sendMessage = '';
        let input = textAreas[0].value;
       
        for (let i = 0; i < input.length; i++) {
            sendMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        textAreas[1].value = sendMessage;
        textAreas[0].value = '';
    }

    function decode(e) {
        let recieveMessage = '';
        let input = textAreas[1].value;

        for(let i = 0; i < input.length; i++){
            recieveMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        textAreas[1].value = recieveMessage;
    }
}