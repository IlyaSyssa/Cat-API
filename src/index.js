import "./styles.css";

async function getCatImage() {
    const result = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
    const json = await result.json();
    let url = json[0].url;
    document.getElementsByClassName('image')[0].setAttribute('src',url);
}

window.getCatImage = getCatImage;