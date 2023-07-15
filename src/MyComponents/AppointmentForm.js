import React from 'react'
import { useState } from 'react';
import "../App.css"

function AppointmentForm() {
const [userData, setUserData]=useState({
  fullName: "",
  age: "",
  phone: "",
  gender: "",
  symptoms: "",
  appDate: "",
  appTime: ""
})

function postUserData(event)
{
  setUserData({...userData,[event.target.name]:event.target.value});

}

const submitData = async(event) =>{
  event.preventDefault();
  const {fullName, age, phone, gender, symptoms, appDate, appTime}=userData;
  if(fullName && age && phone && symptoms && appDate && appTime)
  {
  const res = await fetch(
    'https://healthcare-app-b55dc-default-rtdb.firebaseio.com/userDataRecords.json',
    {method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      fullName, age, phone, gender, symptoms, appDate, appTime
    })});
    if(res)
    {
      setUserData({
        fullName: "",
        age: "",
        phone: "",
        gender: "",
        symptoms: "",
        appDate: "",
        appTime: ""
      });
    alert("Appointment confirmed successfully.");
    }
    else
    alert("Please fill out all the details.")
  }
  else
  alert("Please fill out all the details.")
}

  return (
    <div className='appointment-form'>
      <div className='form-header'>
        <h1 style={{"fontFamily":"Inter","paddingTop":"3%", "paddingLeft":"2%"}}>Appointment Details</h1>
        <h4 style={{"fontFamily":"Inter","fontSize":"18px","paddingBottom":"5%", "paddingLeft":"2%"}}>Please fill out the information below.</h4>
      </div>
      <hr style={{"border-bottom":"2px solid black"}}/>
    <form style={{"margin":"5%", "fontFamily":"Inter"}} method="POST">
  <div class="form-row">

    <div class="form-group col-md-6" style={{"margin":"2%"}}>
      <label for="inputEmail4">Full Name</label>
      <input type="email" name="fullName" value={userData.fullName} onChange={postUserData} class="form-control" id="inputEmail4" placeholder="Full Name" required/>
    </div>

    <div class="form-group col-md-6" style={{"margin":"2%"}}>
      <label for="inputPassword4">Age</label>
      <input type="number" name="age" value={userData.age} onChange={postUserData} class="form-control" id="inputPassword4" placeholder="Age" required/>
    </div>

    <div class="form-group col-md-6" style={{"margin":"2%"}}>
      <label for="inputCity">Phone Number</label>
      <input type="text" name="phone" value={userData.phone} onChange={postUserData} class="form-control" id="inputCity" placeholder='Phone number' required/>
    </div>

  </div>

  <text style={{"margin":"2%"}}>Gender</text>
  <div class="form-group" style={{"margin":"2%"}}>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" onChange={postUserData} id="inlineRadio1" value="Male"/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" onChange={postUserData} id="inlineRadio2" value="Female"/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" onChange={postUserData} id="inlineRadio3" value="Don't want to disclose"/>
  <label class="form-check-label" for="inlineRadio3">Don't want to disclose</label>
</div>
  </div>

  <div class="form-group" style={{"margin":"2%"}}>
    <label for="inputAddress2">Briefly describe what symptoms you are experiencing</label>
    <input type="text" name="symptoms" value={userData.symptoms} onChange={postUserData} class="form-control" id="inputAddress2" placeholder="Describe symptoms"/>
  </div>

  <div class="form-row" style={{"margin":"2%"}}>

  <div class="form-group col-md-2" style={{"margin":"2%"}}>
      <label for="inputZip">Appointment Date</label>
      <input type="date" name="appDate" value={userData.appDate} onChange={postUserData} min={new Date().toISOString().split('T')[0]} class="form-control" id="inputZip" required/>
    </div>

    <div class="form-group col-md-4" style={{"margin":"2%"}}>
      <label for="inputState">Appointment Time</label>
      <select id="inputState" name="appTime" value={userData.appTime} onChange={postUserData} class="form-control" required>
        <option selected>Choose...</option>
        <option>10 am-11am</option>
        <option>12pm-1pm</option>
        <option>4pm-5pm</option>
        <option>7pm-8pm</option>
      </select>
    </div> 
      
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        I agree to the terms and conditions.
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={submitData}>Confirm Appointment</button>
</form>
</div>
  )
}

export default AppointmentForm