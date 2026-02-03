import React from 'react'

function Random(props) {
    const value = `Random value between ${props.min} and ${props.max} => ${getRandomInt(props.min, props.max)}`
  return (
    <div style={{margin: "5px", borderStyle: "solid", borderColor: "black", borderWidth: "1px", padding: "0 10px"}}>
        <p>{value}</p>
    </div>
  )
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Random