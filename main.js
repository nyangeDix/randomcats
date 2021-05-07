console.log('Trying to render cat url');

const fetchImage = async (url, elementId) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data[0].url);
    return document.getElementById(elementId).src = data[0].url;
}

const loadCats = () => {
    fetchImage('https://api.thecatapi.com/v1/images/search', 'cat-sections')
    .then(response => {
        console.log('Image rendered')
    }).catch((error) => {
        console.log(error);
    })
}

// document.getElementById(elementId).src = URL.createObjectURL(blob)
const loadCat = document.getElementById('load-cat');

window.onload = ((e) => {
    console.log('Window has loaded');
    loadCats();
}) 

loadCat.addEventListener('click', loadCats);

