import React from "react";

export default function Alert(props) {

    function firstLetterCapital(word) {
        return word[0].toUpperCase() + word.slice(1)
    }

  return (
    <div style={{height: "50px"}}>
    {props.alert && 

    <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
      <strong>{firstLetterCapital(props.alert.status)}: </strong>{props.alert.message}
    </div>}
    </div>
  );
}
