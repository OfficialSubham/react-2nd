import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [btnName, setBtnName] = useState("Enable Dark Mode");

  // if(props.defaultMode === "dark") {
  //   setStyle({
  //     color: "#fff",
  //     backgroundColor: "#000",
  //   });
  //   setBtnName("Enable Light Mode");
  // }
  // else {
  //   setStyle({
  //     color: "#000",
  //     backgroundColor: "#fff",
  //   });
  //   setBtnName("Enable Dark Mode");
  // }

  // const changeMode = () => {
  //   if (props.style.color === "#fff") {
  //     props.setStyle({
  //       color: "#000",
  //       backgroundColor: "#fff",
  //     });
  //     setBtnName("Enable Dark Mode");
  //   } else {
  //     props.setStyle({
  //       color: "#fff",
  //       backgroundColor: "#000",
  //     });
  //     setBtnName("Enable Light Mode");
  //   }
  // };




  // const showProp = () => {
  //   // console.log(props.style);
  //   props.setStyle({
  //     "background" : "#000",
  //     "color": "#fff"
  //   })
  // }

  return (
    <>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.style}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.style}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.style}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.style}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.style}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.style}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={changeMode}>
          {btnName}
        </button>
      </div> */}

      <div className="container">
        <button
          type="button"
          className="btn btn-primary mx-3 my-2"
          onClick={props.changeAboutStyle}
        >
          Change About Theme
        </button>
      </div>
    </>
  );
}
