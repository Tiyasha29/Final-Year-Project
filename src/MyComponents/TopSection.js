import React from 'react'
import background from "../assets/medicalgroup2.jpg";

export default function TopSection() {
    const myStyle={
        height: "300px",
        fontSize: "20px",
        font: "arial",
        backgroundImage: `url(${background})`,
    }
  return (
    <div>
        <div style={myStyle}>
        <h3>Welcome to our Smart Healthcare platform!</h3>
        <p>Delivering the best healthcare services.</p>
        <p>Connect with nearby healthcare providers and manage all your reports efficiently.</p>
        </div>
    </div>
  )
}