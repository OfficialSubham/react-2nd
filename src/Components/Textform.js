import { useState } from "react";
import React from "react";

export default function Textform() {

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

  return (
    <>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Customise Your Text Here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={writeText}
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

      <div className="container my-3">
        <h3>Preview</h3>
        <div>
          {text}
        </div>
      </div>

    </>
  );
}
