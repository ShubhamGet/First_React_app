import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case got clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Changed")
        setText(event.target.value);
    }

    // for lowercase 
    const handleLowerClick = () => {
        console.log("Lower case got clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    // for clear text
    const handleClear = () => {
        console.log("Lower case got clicked" + text)
        let newText = " ";
        setText(newText);
    }
    // for reverse content 
    const handleReverseClick = () => {
        console.log("Reverse the text" + text)
        let newText = text.reverse();
        setText(newText);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='Container'>
                <h1>{props.heading}</h1>
                <div className="form-floating">
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="floatingTextarea" rows="8"></textarea>
                </div><br />
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse the text</button>
            </div>
            <div className='container my-2'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes Read </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
