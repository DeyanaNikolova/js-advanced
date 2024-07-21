window.addEventListener('load', solve);

function solve() {

    const genreInputEl = document.getElementById('genre');
    const songNameIntutEl = document.getElementById('name');
    const authorIntutEl = document.getElementById('author');
    const dateInputEl = document.getElementById('date');

    const addBtnEl = document.getElementById('add-btn');
    addBtnEl.addEventListener('click', addSong);

    const collectionDivEl = document.querySelector('.all-hits-container');
    const savedSongsEl = document.querySelector('.saved-container');
    const totalLikesEl = document.querySelector('.likes p');

    function addSong(e) {
        e.preventDefault();

        let genre = genreInputEl.value;
        let songName = songNameIntutEl.value;
        let author = authorIntutEl.value;
        let date = dateInputEl.value;

        if (!genre || !songName || !author || !date) {
            return;
        }

        let div = document.createElement('div');
        div.className = 'hits-info';

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        let h2GenreEl = document.createElement('h2');
        h2GenreEl.textContent = `Genre: ${genre}`;

        let h2SongNameEl = document.createElement('h2');
        h2SongNameEl.textContent = `Name: ${songName}`;

        let h2AuthiorEl = document.createElement('h2');
        h2AuthiorEl.textContent = `Author: ${author}`;

        let h3DateEl = document.createElement('h3');
        h3DateEl.textContent = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        div.appendChild(img);
        div.appendChild(h2GenreEl);
        div.appendChild(h2SongNameEl);
        div.appendChild(h2AuthiorEl);
        div.appendChild(h3DateEl);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        collectionDivEl.appendChild(div);

        genreInputEl.value = '';
        songNameIntutEl.value = '';
        authorIntutEl.value = '';
        dateInputEl.value = '';

        function saveSong(e) {
            e.target.parentElement.remove();

            let div = document.createElement('div');
            div.className = 'hits-info';

            let img = document.createElement('img');
            img.src = './static/img/img.png';

            let h2GenreEl = document.createElement('h2');
            h2GenreEl.textContent = `Genre: ${genre}`;

            let h2SongNameEl = document.createElement('h2');
            h2SongNameEl.textContent = `Name: ${songName}`;

            let h2AuthiorEl = document.createElement('h2');
            h2AuthiorEl.textContent = `Author: ${author}`;

            let h3DateEl = document.createElement('h3');
            h3DateEl.textContent = `Date: ${date}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteSong);

            div.appendChild(img);
            div.appendChild(h2GenreEl);
            div.appendChild(h2SongNameEl);
            div.appendChild(h2AuthiorEl);
            div.appendChild(h3DateEl);
            div.appendChild(deleteBtn);
            savedSongsEl.appendChild(div);
        }

    }
    function likeSong(e) {
        e.target.disabled = true;

       let totalLikes = totalLikesEl.textContent.replace('Total Likes: ', '');
         totalLikesEl.textContent = `Total Likes: ${totalLikes}`;
        totalLikes++;
        totalLikesEl.textContent = `Total Likes: ${totalLikes}`;  
    }
    function deleteSong(e) {
        e.target.parentNode.remove();
    }
}