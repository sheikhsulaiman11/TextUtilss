import React, {useState} from 'react'


export default function Textform(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Uppercase","Success")
    }
    const handleloclick = () => {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to Lowercase","Success")
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleclear = () =>{
      setText(``);
      props.showAlert("Text cleared","Success")
    }

    const [ text, setText] = useState('enter text here');
    
  return (
    <>
    <div className='container my-2'>
        <h1>{props.heading}</h1>
       <div classform="mb-3">
        <textarea className="form-control my-4" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':''}}id="My Box" rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to lowercase</button>
        <button className="btn btn-primary" onClick={handleclear}>clear text</button>
       </div>
    </div>
    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>
    </>
  )
}
