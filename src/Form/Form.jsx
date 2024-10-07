import React, { useState } from 'react'
import Button from './Button'
import InputField from './InputField'
import { validateForm } from '../utils/validation'

const Form = ({config}) => {
    const [formdata,setformdata] =useState({})
    const [errors,seterrors] =useState({})


    const onChnageHandler =(name,value)=>{
        setformdata((prev)=>({...prev, [name]:value}))
    }


    const onSubmitHandler =(e)=>{
        console.log(formdata);
         e.preventDefault();
         console.log(errors);
         const validationerror = validateForm(config.fields,formdata);
         if(Object.keys(validationerror).length == 0){
            console.log("form submitted succesfully")
            // seterrors({})
            alert("form succesfllu")
         }
         else{
            seterrors(validationerror);
         }
    }

    const inputform =config.fields.map((field)=>(
        <InputField
        field={field}
        onChange={onChnageHandler}
        value={formdata[field.name]}
        error={errors[field.name]}
        />
    ))

  return (
    <form onSubmit={onSubmitHandler}>
        {inputform}
        <Button label ={config.submitButton.label}/>
    </form>
  )
}

export default Form