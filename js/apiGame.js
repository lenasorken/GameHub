const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiGames");
const url = "https://lfs.one/gamehub/wp-json/wp/v2/product" + "/" + id;
const imgURL = "https://lfs.one/gamehub/wp-json/wp/v2/media" + "/";

async function apiGames() {
    try {
        html.innerHTML = ''
        const fetchGames = await fetch(url);
        const callGames = await fetchGames.json();
        const imageId = `${callGames.featured_media}`;
        const callImage = await fetch(imgURL + imageId);
        const image = await callImage.json();
        console.log(callGames);
        html.innerHTML = `
        <h1>${callGames.title.rendered}</h1>
        <img id="apiImage" alt="Image not Found for: ${callGames.title.rendered}" src="${image.source_url}" />
        `;
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError("Error", error);
    }
}
apiGames();