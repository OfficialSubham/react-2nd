// import { useState } from "react"
import React from "react";

export default function Textform() {
    return (
        <div className="mb-5 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Text Here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
    )
};
