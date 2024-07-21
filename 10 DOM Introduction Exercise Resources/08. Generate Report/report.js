function generateReport() {

  let headRow = Array.from(document.getElementsByTagName('input'));

  let bodyElements = Array.from(document.querySelectorAll('tbody tr'));

  let indices = [];
  let result = [];

  for (let i = 0; i < headRow.length; i++) {

    if (headRow[i].checked === true) {
      indices.push(i);
    }
  }

  for (let i = 0; i < bodyElements.length; i++) {

    let info = {};

    let tdElements = Array.from(bodyElements[i].children);

    for (let j = 0; j < indices.length; j++) {

      let key = headRow[indices[j]].name.toLowerCase();

      let value = tdElements[indices[j]].textContent;
      info[key] = value;
    }
    result.push(info);
  }
 
  let resultAsString = JSON.stringify(result);
  let outputArea = document.getElementById('output');
  outputArea.textContent = resultAsString;

}