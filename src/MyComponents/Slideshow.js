import React from 'react'
import medicalImage from "../assets/medicalgroup2.jpg"
import medicalImage2 from "../assets/medicalgroup3.jpg"
import medicalImage3 from "../assets/medicalgroup4.jpg"
export default function Slideshow() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={medicalImage} style={{width:"1000px",height:"550px"}} className="d-block w-100" alt="..."/>
      <div style={{color:"black"}} className="carousel-caption d-none d-md-block">
        <h5>Get the best healthcare services</h5>
        <p>Find healthcare providers near you.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={medicalImage2} style={{width:"1000px",height:"550px"}} className="d-block w-100" alt="..."/>
      <div style={{color:"black"}} className="carousel-caption d-none d-md-block">
        <h5>Store personal reports securely</h5>
        <p>High security of your personal medical data.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={medicalImage3} style={{width:"1000px",height:"550px"}} className="d-block w-100" alt="..."/>
      <div style={{color:"black"}} className="carousel-caption d-none d-md-block">
        <h5>Generate diagnosis</h5>
        <p>Log symptoms, generate possible diagnosis.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}