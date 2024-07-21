function getArticleGenerator(input) {

    let articles = input;

    return () => {

        if (articles.length > 0) {
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            article.innerText = currentText;
            container.appendChild(article);
        }
    };

    // Solution 2:
//     const div = document.getElementById('content');

// return function () {
//     const article = articles.shift();

//     if (article != undefined) {
//         const element = document.createElement('article');
//         element.textContent = article;
//         div.appendChild(element);
//     }
// };
}
