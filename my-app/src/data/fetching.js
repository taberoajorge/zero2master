const API_KEY = 'HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE';
const API_URL = 'api.giphy.com/v1/random';

const request = fetch(
  `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

request
  .then(resp => resp.json())
  .then(({ data }) => { 
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url;

    document.body.append( img )
  })
  .catch(console.warn)