import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../Context'

function Content() {
  const { selectedLanguage, message, setMessage} = useContext(LanguageContext)

  useEffect(() => {
    if(selectedLanguage === 'German') {
      setMessage('Hallo Welt')
    } else if (selectedLanguage === 'English') {
      setMessage('Hello World')
    } else if(selectedLanguage === 'Albanian') {
      setMessage('Mire se vini')
    }
  }, )


  return (
    <div>
      <h2 className='m-3'>{message}</h2>
    </div>
  )
}

export default Content
