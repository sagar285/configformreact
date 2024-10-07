import React from 'react'
import Form from './Form/Form'
import { formConfig } from './config/formConfig'


const App = () => {
  return (
    <div>
      <Form config={formConfig}/>
    </div>
  )
}

export default App