const API_KEY = 'HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE';
const API_URL = 'http://api.giphy.com/v1/gifs/random';


const getImage = async () => {
    try {
        const resp = await fetch(`${API_URL}?api_key=${API_KEY}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url
    } catch (error) {
        return 'No existe';
    }
};

export default getImage;