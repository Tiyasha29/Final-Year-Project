import React from 'react'
import aboutimage from "../assets/aboutpageimage.jpg";
//import glassimage from "../assets/glassimage.jpeg";

export default function About() {
  const myAboutStyle={"fontFamily": "Inter",
  "padding": "20px",
  "align": "left",
  "display": "flex",
  }
  return (
    <>
    <div style={myAboutStyle}>
      <h3 style={{"padding":"20px", "fontWeight":"bold","box-shadow": "0 0 5px 0", 
      "background": "inherit",
      "backdrop-filter": "blur(10px)"}}>About Our Platform</h3>
      <p style={{"padding":"20px"}}>Our smart healthcare platform seeks to 
    provide a one stop destination for patients to connect with healthcare providers around them, log in their 
    symptoms if any as well as securely store and monitor medical reports daily. The thrust of the mission 
    is on establishing a fully functional, centralised and standard platform to provide the most seamless 
    experience to patients around the world. Health and well-being of people form the centre of any nation’s 
    public policy. The rate of ill-health affects economic prospects, lowers the capacity to accumulate health 
    capital, quality of life and labour market outcomes. The COVID-19 pandemic has further exposed the 
    stresses and weaknesses of the world’s healthcare system. As a 
    patient, being frustrated with care that is inflexible, impersonal and inefficient is natural and these 
    individual experiences add up to poor safety and care coordination that may cost lives.
      </p>
      <img src={aboutimage} alt="demonstrative" style={{"width": "800px", "height": "500px", "padding":"20px"}}/>
    </div>
    <p style={{"padding":"20px","fontFamily":"Inter","fontWeight":"bold","textAlign":"center","borderColor":"lightblue", "borderStyle":"outset", "borderRadius":"5px", "boxShadow":"10px 10px 5px lightblue"}}>A journey to better healthcare.</p>
    </>
  )
}