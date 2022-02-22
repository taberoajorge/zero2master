import React from 'react'
import useFetch from "../../hooks/useFetch";

function MultipleHooks() {
  const { data, loading } = useFetch(`https://api.giphy.com/v1/gifs/search?q=hello&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`)

  return (
    <ul>
      {loading && <h1>Cargando</h1>}
      {!loading && (data.map(({id, images: { original: {url} }, title})=>(
        <li key={id} >
          <img src={url} alt={title} />
        </li>
      )))}
    </ul>
  )
}

export default MultipleHooks