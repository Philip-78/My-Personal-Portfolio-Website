document.addEventListener('DOMContentLoaded', () => {
    const email = 'p.idiare@innopolis.university'; 
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email });

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('First API response data:', data);
            const comicId = data;
            if (!comicId) {
                throw new Error('Comic ID not found in the response');
            }
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(comicData => {
            console.log('Comic data:', comicData); // debug statement
            displayComic(comicData);
        })
        .catch(error => {
            console.error('Error fetching comic:', error);
        });

    function displayComic(comicData) {
        const comicContainer = document.getElementById('comic-container');
        const img = document.createElement('img');
        img.src = comicData.img;
        img.alt = comicData.alt;
        const title = document.createElement('h3');
        title.textContent = comicData.safe_title;
        const date = document.createElement('p');
        const comicDate = new Date(comicData.date);
        date.textContent = `Published on: ${comicDate.toLocaleDateString()}`;
        comicContainer.appendChild(title);
        comicContainer.appendChild(img);
        comicContainer.appendChild(date);
    }
});