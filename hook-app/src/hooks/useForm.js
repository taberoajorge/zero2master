import { useState } from "react";

function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);
  
  const handleOnChange = ({target}) => {
    // console.log(e);
        setValues({
          ...values,
          [target.name]: target.value,
        });
      };

  return [
    values,
    handleOnChange
    ]
}

export default useForm