import React from 'react'

function Greetings(props) {
  return (
    <div style={{margin: "5px", borderStyle: "solid", borderColor: "black", borderWidth: "1px", padding: "0 10px"}}>
        <p>{getGreeting(props.lang)} {props.children}</p>
    </div>
  )
}

function getGreeting(lang) {
    switch (lang) {
        case "de":
            return "Hallo"
        case "en":
            return "Hello"
        case "es":
            return "Hola"
        case "fr":
            return "Bonjour"
    }
}

export default Greetings