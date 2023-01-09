import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("On Changed")
        setText(event.target.value);
    }

    // for upper case
    const handleUpClick = () => {
        console.log("Upper case got clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase ", "Success");
    }

    // for lowercase 
    const handleLowerClick = () => {
        console.log("Lower case got clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase ", "Success");
    }
    // for clear text
    const handleClear = () => {
        console.log("Lower case got clicked" + text)
        let newText = " ";
        setText(newText);
        props.showAlert("Text has been cleared ", "Success");
    }
    // for reverse content 
    const handleReverseClick = () => {
        console.log("Reverse the text" + text)
        let newText = "";
        setText(newText);
    }
    // remove extra space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space has been removed ", "Success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='Container'>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="form-floating">
                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="floatingTextarea"></textarea>
                </div><br />
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse the text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Space</button>

            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes Read </p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your mind in the above textBox to Preview"}</p>
            </div>
        </>
    )
}
