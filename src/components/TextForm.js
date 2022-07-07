import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleOnChange = (event) => {
    // console.log('onchange');
    setText(event.target.value)

  }
  const reset = () => {
    // console.log('uppercase');
    setText('')

  }
  const uppercase = () => {
    // console.log('uppercase');
    setText(text.toUpperCase())

  }


  return (
    <>
      <div className='container my-3 border p-3'>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="...enter text here" spellCheck="false"></textarea>
        <button className='btn btn-dark me-2' onClick={reset}>Reset</button>
        <button className='btn btn-dark me-2' onClick={uppercase}>Convert to Uppercase</button>
      </div>

      <div className="container my-3 border p-3">
        <h5>Your text summary</h5>
        <p>{text.replace(/\n/g, ' ').split(' ').filter(value => value != '').length} words, {text.trim().length} characters</p>
        <p>{(text.replace(/\n/g, ' ').split(' ').filter(value => value != '').length)*0.08}m - time to read</p>
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


