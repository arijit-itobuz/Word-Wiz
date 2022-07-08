import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleOnChange = (event) => {
    // console.log('onchange');
    setText(event.target.value)

  }
  const reset = () => {
    setText('')

  }
  const uppercase = () => {
    // console.log('uppercase');
    setText(text.toUpperCase())

  }
  const lowercase = () => {
    setText(text.toLowerCase())

  }
  const copy = () => {
    let myBox = document.getElementById('myBox')
    myBox.select()                                                                     // for selection highlight
    navigator.clipboard.writeText(myBox.value)
  }
  const removeSpaces = () => {
    setText(text.split(/\s+/gi).join(' '))
  }


  return (
    <>
      <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h1>{props.heading}</h1>
        <textarea className={`form-control my-3 bg-${props.mode} text-${props.altMode}`} value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="...enter text here" spellCheck="false"></textarea>
        <button className={`btn btn-${props.altMode} me-2`} onClick={reset}>Reset</button>
        <button className={`btn btn-${props.altMode} me-2`} onClick={copy}>Copy</button>
        <button className={`btn btn-${props.altMode} me-2`} onClick={uppercase}>Convert to Uppercase</button>
        <button className={`btn btn-${props.altMode} me-2`} onClick={lowercase}>Convert to Lowercase</button>
        <button className={`btn btn-${props.altMode} me-2`} onClick={removeSpaces}>Remove Extra Spaces</button>
      </div>

      <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h5>Your text summary</h5>
        <p>{text.replace(/\n/g, ' ').split(' ').filter(value => value !== '').length} words, {text.trim().length} characters</p>
        <p>Time to read - {(text.replace(/\n/g, ' ').split(' ').filter(value => value !== '').length)*0.08} min</p>
        <h5>Preview</h5>
        <p>{text === '' ? '...Enter your text above' : text}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
  heading: "set-heading-here"
}


