const url = "https://lfs.one/gamehub/wp-json/wp/v2/product";
const imgURL = "https://lfs.one/gamehub/wp-json/wp/v2/media";
const html = document.querySelector(".games_page_container");

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

async function getProducts() {
    try {
        const fetchGames =  await fetch(url);
        const fetchImg = await fetch(imgURL);
        const callGames = await fetchGames.json()
        const callImg = await fetchImg.json();
        html.innerHTML = '';
        for(let i = 0; i < callGames.length; i++) {
            console.log(callImg[i]);
            html.innerHTML += `
            <a href="../html/apigames.html?id=${callGames[i].id}">
            <h2 id="apiTitle">${callGames[i].title.rendered}</h2>
            </a>
            `;
        }
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError("Error", error);
    }
}
getProducts();