import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";


function useFetch(url) {

  const [value, setValue] = useState({data: null, loading: true, error: null});

  useEffect(() => {

 

      getData(url)
        .then(data => setValue({
          ...value,
          data: data,
          loading: false
        }))
        .catch(error => {
          setValue({
            ...value,
          error: error
          })
        })



  }, [url])

  return value;
}

export default useFetch