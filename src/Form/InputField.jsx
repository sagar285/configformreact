import React from 'react'

const InputField = ({field,value,onChange,error}) => {

    const onInputchange =(e)=>{
        onChange(field.name,e.target.value);
    }
  return (
    <div>
        <h5>{field.label}</h5>
     <input
      type={field.type}
      placeholder={field.placeholder}
      onChange={onInputchange}
     />

     {error && <span>{error}</span>}
    </div>
  )
}

export default InputField