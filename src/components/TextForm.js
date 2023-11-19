import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (

        <div className='container' style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#495057', color: props.Mode === 'dark' ? 'white' : '#495057' }} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#495057', color: props.Mode === 'light' ? 'black' : 'white' }} className="form-control" id="exampleFormControlTextarea1" value={text}
                    rows="10"></textarea></div>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >Click here to Uppercase</button>
            <button type="button" className="btn btn-success my-3 mx-1" onClick={handleLoClick} >Click here to Lowercase</button>
            <button type="button" className="btn btn-danger my-3 mx-1" onClick={handleClearClick} >Click here to Clear</button>

            <div className="container" style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#495057', color: props.Mode === 'light' ? 'black' : 'white' }} > <p>Character Count: {text.length}</p>
                <p>Word Count: {text.split(" ").length}</p>
                <p>Time Required for reading is : {0.008 * text.split(" ").length} minutes.</p></div>

        </div>
    )
}
