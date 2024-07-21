window.addEventListener('load', solve);

function solve() {

    const genreInput = document.getElementById('genre');
    const songNameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', addSong);

    const divCollection =  document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');
    const totalLikesEl = document.querySelector('.likes p');

    function addSong(event) {
        event.preventDefault();

        let genre = genreInput.value;
        let songName = songNameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;

        if (!genre || !songName || !author || !date) {
            return;
        }

        const divEl = document.createElement('div');
        divEl.className = 'hits-info';

        imgEl = document.createElement('img');
        imgEl.src = './static/img/img.png';

        const genreEl = document.createElement('h2');
        genreEl.textContent = `Genre: ${genre}`;

        const nameEl = document.createElement('h2');
        nameEl.textContent = `Name: ${songName}`;

        const authorEl = document.createElement('h2');
        authorEl.textContent = `Author: ${author}`;

        const dateEl = document.createElement('h3');
        dateEl.textContent = `Date: ${date}`;

        const saveBtnEl = document.createElement('button');
        saveBtnEl.className = 'save-btn';
        saveBtnEl.textContent = 'Save song';
        saveBtnEl.addEventListener('click', saveSong);

        const likeBtnEl = document.createElement('button');
        likeBtnEl.className = 'like-btn';
        likeBtnEl.textContent = 'Like song';
        likeBtnEl.addEventListener('click', likeSong);

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.className = 'delete-btn';
        deleteBtnEl.textContent = 'Delete';
        deleteBtnEl.addEventListener('click', deleteSong);

        divEl.appendChild(imgEl);
        divEl.appendChild(genreEl);
        divEl.appendChild(nameEl);
        divEl.appendChild(authorEl);
        divEl.appendChild(dateEl);
        divEl.appendChild(saveBtnEl);
        divEl.appendChild(likeBtnEl);
        divEl.appendChild(deleteBtnEl);

        divCollection.appendChild(divEl);

        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        function saveSong(e) {
            e.target.parentElement.remove();

            const divEl = document.createElement('div');
            divEl.className = 'hits-info';

            imgEl = document.createElement('img');
            imgEl.src = './static/img/img.png';

            const genreEl = document.createElement('h2');
            genreEl.textContent = `Genre: ${genre}`;

            const nameEl = document.createElement('h2');
            nameEl.textContent = `Name: ${songName}`;

            const authorEl = document.createElement('h2');
            authorEl.textContent = `Author: ${author}`;

            const dateEl = document.createElement('h3');
            dateEl.textContent = `Date: ${date}`;

            const deleteBtnEl = document.createElement('button');
            deleteBtnEl.className = 'delete-btn';
            deleteBtnEl.textContent = 'Delete';
            deleteBtnEl.addEventListener('click', deleteSong);


            divEl.appendChild(imgEl);
            divEl.appendChild(genreEl);
            divEl.appendChild(nameEl);
            divEl.appendChild(authorEl);
            divEl.appendChild(dateEl);
            divEl.appendChild(deleteBtnEl);

            savedSongs.appendChild(divEl);
        }

        function likeSong(e) {
            e.target.disabled = true;

            let likes = totalLikesEl.textContent.replace('Total Likes: ', '');
            likes++;
            totalLikesEl.textContent = `Total Likes: ${likes}`;
        }

        function deleteSong(e) {
            e.target.parentElement.remove();
        }
    }
}