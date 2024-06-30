"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    var email = 'p.idiare@innopolis.university';
    var url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email: email }).toString();
    fetch(url.toString())
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok: ".concat(response.statusText));
        }
        return response.json();
    })
        .then(function (data) {
        console.log('First API response data:', data);
        var comicId = data.comicId;
        if (!comicId) {
            throw new Error('Comic ID not found in the response');
        }
        return fetch("https://fwd.innopolis.university/api/comic?id=".concat(comicId));
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok: ".concat(response.statusText));
        }
        return response.json();
    })
        .then(function (comicData) {
        console.log('Comic data:', comicData); // debug statement
        displayComic(comicData);
    })
        .catch(function (error) {
        console.error('Error fetching comic:', error);
    });
    function displayComic(comicData) {
        var comicContainer = document.getElementById('comic-container');
        if (comicContainer) {
            var img = document.createElement('img');
            img.src = comicData.img;
            img.alt = comicData.alt;
            var title = document.createElement('h3');
            title.textContent = comicData.safe_title;
            var date = document.createElement('p');
            var comicDate = new Date(comicData.date);
            date.textContent = "Published on: ".concat(comicDate.toLocaleDateString());
            comicContainer.appendChild(title);
            comicContainer.appendChild(img);
            comicContainer.appendChild(date);
        }
    }
});
