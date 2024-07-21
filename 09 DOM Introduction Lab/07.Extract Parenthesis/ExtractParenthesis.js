function extract(content) {
    let contentElement = document.getElementById('content');
  
    let pattern = /\(([^(]+)\)/g;

    let matches = contentElement.textContent.matchAll(pattern);
    console.log(match);
    let result = [];

    for (let match of matches) {
        console.log(match[1]);
        result.push(match[1]);
    }
    return result.join('; ');
}