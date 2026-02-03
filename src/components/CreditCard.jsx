import React from 'react'
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/master-card.svg"

function CreditCard(props) {
   return (
    <div style={{width: "300px", height: "150px", position: "relative", paddingTop: "10px", margin:"10px", color: props.color, backgroundColor: props.bgColor, borderRadius: "10px"}}>
        <img style={{position:"absolute", right: "15px", height: "15px", width: "40px"}}src={props.type === "Visa" ? visa : mastercard} alt="Card" />
        <p style={{position: "absolute", top: "50%", left: "20%", transform: "translate(-10%, -50%)", fontSize:"25px", margin:"0" }}>{maskCardNumber(props.number)}</p>
        <div style={{
            position: "absolute",
            bottom: "5px",
            left: "10px",
        }}>
            <div style = {{display: "flex", gap: "20px"}}>
                <p style={{margin:"0px"}}>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p style={{margin:"0px"}}>{props.bank}</p>
            </div>
            <p style={{margin:"0px"}}>{props.owner}</p> 
        </div>
    </div>
  )
}

function maskCardNumber(number) {
  const str = number.toString();
  const last4 = str.slice(-4);
  return "•••• •••• •••• " + last4;
}

export default CreditCard