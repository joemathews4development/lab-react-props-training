import React from 'react'

function BoxColor(props) {
    const backgroundColor = rgbToHex(props.r, props.g, props.b)
  return (
    <div style={{margin: "5px", borderStyle: "solid", borderColor: "black", borderWidth: "1px", padding: "0 10px", textAlign: "center", backgroundColor: backgroundColor}}>
        <p>rgb({props.r},{props.g},{props.b})</p>
        <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  )
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(value => value.toString(16).padStart(2, "0"))
      .join("")
  );
}

export default BoxColor