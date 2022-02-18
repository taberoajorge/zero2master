import React from 'react'
import { ListItemText, ListItemButton } from '@mui/material'
import { Masonry } from '@mui/lab';

// api.giphy.com/v1/gifs/search?api_key=HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE&q=test
const API_KEY = 'HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE';
const URL_API = 'http://api.giphy.com/v1/gifs/search';
// const URL_API = 'http://api.giphy.com/v1/gifs/random';


function ImageContainer({ searchTerm = "cats" }) {
  const [gifs, setGifs] = React.useState([]);

  const getGifs = async () => {
    const resp = await fetch(`${URL_API}?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
    const { data } = await resp.json();
    // console.log(data);
    setGifs(data)
  };

  getGifs();



  return (
    <Masonry>
      {gifs.length > 0 && (gifs.map((item) => (
        <img key={item.id} src={item.images.original.url} alt={item.title} />
      )))}
    </Masonry>
  )
}

export default ImageContainer