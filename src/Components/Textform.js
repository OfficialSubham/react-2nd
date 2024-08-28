import { useState } from "react";
import React from "react";

export default function Textform(props) {

  const [text, setText] = useState("Enter The Text")

  const clickToSmall = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }

  const clickToCapital = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText)
  }

  const clickToCopy = () => {
    // let text = text;
    navigator.clipboard.writeText(text)
  }

  const writeText = (e) => {
    // console.dir(e.target.value);
    setText(e.target.value)
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
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Customise Your Text Here
        </label>
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
        <button type="button" className="btn btn-primary mx-3 my-2" onClick={clickToSmall}>
          Make the Text Smaller
        </button>
        <button type="button" className="btn btn-primary mx-3 my-2" onClick={clickToCapital}>
          Make the Text Capital
        </button>
        <button type="button" className="btn btn-primary mx-3 my-2" onClick={clickToCopy}>
          Copy the Text
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
          {text}
        </div>
      </div>

    </>
  );
}
