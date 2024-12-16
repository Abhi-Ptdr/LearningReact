import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert("Converted to Upper Case!", "success");
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "warning");
  }

  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to the clipboard!", "info");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!", "success");
  }

  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className=" mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#181818":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length===0}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length===0}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters </p>
      <p>{0.008 * (text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length)} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
