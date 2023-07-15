import React from 'react'
import Card from '../MyComponents/Card';

export let doctorsList=
    [{"id":4, "name":"Dr. Bondhopadhyay Debjani", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":5, "email":"debjani231@gmail.com", "phone":"+91 8844351294"},

{"id":5, "name":"Dr. Banerjee Arnab", "specialization":"Psychiatrist", "location":"kolkata", 
    "rating":4, "email":"arnab07@gmail.com", "phone":"+91 8966340139"},

{"id":6, "name":"Dr. Uttam Agarwal", "specialization":"ENT Surgeon", "location":"Kolkata", 
    "rating":5, "email":"aggarwal.uttam@gmail.com", "phone":"+91 9857338321"},

{"id":7, "name":"Dr. Agarwal Ajit", "specialization":"Geriatric Medicine", "location":"Kolkata", 
    "rating":5, "email":"ajit23@gmail.com", "phone":"+91 8445900312"},

{"id":8, "name":"Dr. Baig Sarfaraz Jalil", "specialization":"Gastro Surgeon", "location":"Kolkata", 
    "rating":3.5, "email":"baigsarfaraz.Jalil@gmail.com", "phone":"033-2287 2321"},

{"id":9, "name":"Dr. Banerjee Kedar Ranjan", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":4, "email":"ranjan00@gmail.com", "phone":"+91 8966328112"},

{"id":10, "name":"Dr. Banerjee Mallika", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":4, "email":"mallika.banerjee@gmail.com", "phone":"+91 8944996321"},

{"id":11, "name":"Dr. Bramha Arabinda", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":5, "email":"arabinda99@gmail.com", "phone":"033-3244 9024"},

{"id":12, "name":"Dr. Chatterjee D.", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":5, "email":"dchatterjee@gmail.com", "phone":"033-4355 6496"},

{"id":13, "name":"Dr. Das R.C.", "specialization":"Psychiatrist", "location":"Kolkata", 
    "rating":4.5, "email":"rcdas00@gmail.com", "phone":"+91 9574788127"}]

export default function Doctors() {
    
  return (
    <>
    <div>
      {doctorsList.map(obj=><Card name={obj.name} 
      specialization={obj.specialization} 
      rating={obj.rating}
      location={obj.location}
      email={obj.email}
      phone={obj.phone}/>)}
    </div>
    </>
  )
}