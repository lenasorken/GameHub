const url = "https://lfs.one/gamehub/wp-json/wc/store/products";
const productsContainer = document.querySelector(".games_page_container");


async function getProducts() {
    try{
        const response = await fetch (url);
        const getResults = await response.json();
        createHTML(getResults);

    }
    catch (error) {
        console.log(error)
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function(product) {
        productsContainer.innerHTML += '<div class="game_list">' + product.name + "</div>";
    })
}


