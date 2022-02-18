import React from 'react'
import { Masonry } from '@mui/lab';

const API_KEY = 'HlVw1DoiYmJA9VcI1HEPIS7ZxgCP1UtE';
const URL_API = 'http://api.giphy.com/v1/gifs/search';


function ImageContainer({ searchTerm = "cats" }) {
  const [gifs, setGifs] = React.useState([]);

  React.useEffect(async () => {
    const resp = await fetch(`${URL_API}?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
    const { data } = await resp.json();
    const newData = data.map((prop) => ({
      id: prop.id,
      title: prop.title,
      url: prop.images.original.url
    }
    ))
    setGifs(newData)
  }, []);



  return (
    <Masonry>
      {gifs.length > 0 && (gifs.map(({ id, title, url }) => (
        <img key={id} src={url} alt={title} />
      )))}
    </Masonry>
  )
}

export default ImageContainer