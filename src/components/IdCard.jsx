import React from 'react'

function IdCard(props) {
    const paddingStyle = {padding: "3px", margin: "0px"}
    const fontStyle = {fontWeight:"bold"}
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "5px", padding: "5px", margin: "5px", borderStyle: "solid", borderColor: "black", borderWidth: "1px" }}>
        <img style={{height: "150px"}}src={props.picture} alt="Profile picture" />
        <div>
            <p style={paddingStyle}><span style={fontStyle}>First name</span>: {props.firstName}</p>
            <p style={paddingStyle}><span style={fontStyle}>Last name</span>: {props.lastName}</p>
            <p style={paddingStyle}><span style={fontStyle}>Gender</span>: {props.gender}</p>
            <p style={paddingStyle}><span style={fontStyle}>Height</span>: {props.height}</p>
            <p style={paddingStyle}><span style={fontStyle}>Birth</span>: {props.birth.toDateString()}</p>
        </div>
    </div>
  )
}

export default IdCard