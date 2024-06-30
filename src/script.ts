import { ApiResponse, ComicResponse } from './types';

document.addEventListener('DOMContentLoaded', () => {
    const email: string = 'p.idiare@innopolis.university';
    const url: URL = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email }).toString();

    fetch(url.toString())
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json() as Promise<ApiResponse>;
        })
        .then((data: ApiResponse) => {
            console.log('First API response data:', data);
            const comicId = data.comicId;
            if (!comicId) {
                throw new Error('Comic ID not found in the response');
            }
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json() as Promise<ComicResponse>;
        })
        .then((comicData: ComicResponse) => {
            console.log('Comic data:', comicData); // debug statement
            displayComic(comicData);
        })
        .catch((error: Error) => {
            console.error('Error fetching comic:', error);
        });

    function displayComic(comicData: ComicResponse): void {
        const comicContainer = document.getElementById('comic-container');
        if (comicContainer) {
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
    }
});
