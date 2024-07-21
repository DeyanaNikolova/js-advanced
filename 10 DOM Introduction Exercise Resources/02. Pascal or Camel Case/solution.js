function solve() {

    const textElement = document.getElementById('text').value;
    const conventionElement = document.getElementById('naming-convention').value;
    let result = '';


    if (conventionElement == 'Camel Case') {

        for (let i = 0; i < textElement.length; i++) {
            if (textElement[i] === ' ') {
                result += (textElement[i + 1].toUpperCase());
                i++;
            } else {
                result += textElement[i].toLowerCase();
            }
        }
    } else if (conventionElement == 'Pascal Case') {

        result += (textElement[0].toUpperCase());

        for (let i = 1; i < textElement.length; i++) {

            if (textElement[i] === ' ') {
              
                result += textElement[i + 1].toUpperCase();
                i++;
            } else {
                result += textElement[i].toLowerCase();
            }
        }

    } else {
        result = 'Error!';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}



// Solutuin Stoian
// const text = document.getElementById('text').value;
// const convention = document.getElementById('naming-convention').value;

// let result = '';
// let words = text.split(' ');
// if (convention == 'Camel Case') {

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].toLowerCase();
//         if (i != 0) {
//             words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//         }
//     }
// } else if (convention == 'Pascal Case') {
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].toLowerCase();
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//     }

// } else {
//     return document.getElementById('result').textContent = 'Error!';
// }
// result = words.join('');
// document.getElementById('result').textContent = result;