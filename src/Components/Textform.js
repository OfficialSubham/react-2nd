import { useState } from "react";
import React from "react";

export default function Textform(props) {

  const [text, setText] = useState("Enter The Text")

  const clickToSmall = () => {
    if(text) {
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showAlert("success", "All text are now Small")
    }
    else {
      props.showAlert("warning", "There is no text")
    }
  }

  const clickToCapital = () => {
    if(text) {
      let newText = text.toLocaleUpperCase();
      setText(newText)
      props.showAlert("success", "All text are now Capital")
    }
    else {
      props.showAlert("warning", "There is no text")
    }
  }

  const clickToCopy = () => {
    // let text = text;
    if(text) {
      navigator.clipboard.writeText(text)
      props.showAlert("success", "Message is copied to your clipboard")
    }
    else {
      props.showAlert("warning", "There is no text")
    }
  }

  const writeText = (e) => {
    // console.dir(e.target.value);
    setText(e.target.value)
  }

  const clickToClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("success", "Text is Now Cleared")
  }

  const wordCounter = () => {
    if(text.length === 0) {
      return 0;
    }
    else {
      if(text[text.length -1] === " ") {
        return text.split(" ").length - 1
      }
      else {
        return text.split(" ").length

      }
    }
  }

  return (
    <>
      <div className="mb-3 my-3" style={{"backgroundColor": props.style.background}}>
        <h2 htmlFor="exampleFormControlTextarea1" className="form-label">
          Customise Your Text Here
        </h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={writeText}
          style={{"backgroundColor": props.style.background,
                  "color": props.style.color
          }}
        ></textarea>
      </div>

      <div className="container">
        <button disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-2" onClick={clickToSmall}>
          Make the Text Smaller
        </button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-2" onClick={clickToCapital}>
          Make the Text Capital
        </button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-2" onClick={clickToCopy}>
          Copy the Text
        </button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-2" onClick={clickToClear}>
          Clear the Text
        </button>
      </div>

      <div className="container">
        <h3>
          Counter
        </h3>
        <div className="my-3"> 
          {wordCounter()} number of words and {text.length} number of Letters
        </div>
      </div>

      <div className="container my-3">
        <h3>Preview</h3>
        <div>
          {text.length === 0 ? "Nothing to preview" : text}
        </div>
      </div>

    </>
  );
}
