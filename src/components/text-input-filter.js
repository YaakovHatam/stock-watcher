import React, { Component } from "react";

function TextInputFilter(props) {
  const onInputChange = (e) => {
    props.onInputChange(e.target.value);
  };

  return <input onChange={onInputChange} />;
}

export default TextInputFilter;
