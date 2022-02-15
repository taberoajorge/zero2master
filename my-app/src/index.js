const API_KEY = 'HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE';
const API_URL = 'http://api.giphy.com/v1/gifs/random';


const getImagen = async () => {
  try {
    const resp = await fetch(`${API_URL}?api_key=${API_KEY}`);
    const { data } = await resp.json();
    const img = document.createElement('img')
    const resolve = data.images.original.url;
    img.src = resolve;
    document.body.append(img)
  } catch (error) {
    console.error(error);
  }
};

getImagen();