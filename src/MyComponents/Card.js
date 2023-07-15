import React from 'react'
import "../App.css"
import staricon from "../assets/staricon.jpg"
import emailicon from "../assets/emailicon.jpg"
import phoneicon from "../assets/phoneicon.png"

export default function Card(props) {
  return (
    <div>
    <div className='cardsCollection'>
      <h3 className='docdetails'> {props.name}</h3>
      <p className='docdetails'><b>Specialization:</b> {props.specialization}</p>
      <p className='docdetails'><b>Rating:</b> {props.rating} <img src={staricon} alt="staricon" 
      style={{"width": "3%"}}/></p>
      <p className='docdetails'><b>Location:</b> {props.location} 
      <img src={emailicon} alt="emailicon" style={{"width": "3%", "marginLeft":"50px"}}/><a href={`mailto:${props.email}`}>{props.email}</a>
      <img src={phoneicon} alt="phoneicon" style={{"width": "3%", "marginLeft":"50px"}}/>{props.phone}
      </p>
      <a className='btn btn-primary' href="./appointmentbooking" style={{"margin":"10px"}}>Book an appointment</a>
    </div>
    </div>
  )
}