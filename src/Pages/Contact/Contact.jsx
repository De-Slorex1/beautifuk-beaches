import React, { useReducer } from 'react'
import '../Contact/Contact.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'





const reducer =(state, action) => {
    switch(action.type) {
        case "NAME" :
            return{...state, name: action.payload}
        case "EMAIL" :
            return{...state, email: action.payload}
        case "PHONENO" :
            return{...state, phoneNo: action.payload}
        case "MESSAGE" :
            return{...state, message: action.payload}
        default:
            console.log("Invalid Input")
            return state
    }
}

function Contact() {

    const [state, dispatch] = useReducer(reducer,{
        name: "",
        email: "",
        phoneNo: "",
        message: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        navigate("/")
    }


  return (
    <div>
        <div className='contact_contain'>
            <h2>Let Get in Touch</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label>Full Name</label>
                <input type="text" onChange={(e) => {dispatch({type: "NAME", payload: e.target.value})}} placeholder='enter full name' required />
                <label>Email Address</label>
                <input type="email" onChange={(e) => {dispatch({type: "EMAIL", payload: e.target.value})}} placeholder='enter email address' required />
                <label>Phone Number</label>
                <input type="number" onChange={(e) => {dispatch({type: "PHONENO", payload: e.target.value})}} placeholder='enter phone number' required />
                <label>Message</label>
                <textarea name="" id="" rows="10" onChange={(e) => {dispatch({type: "MESSAGE", payload: e.target.value})}} placeholder='enter your request' required></textarea>
                <input type="submit" value= "SUBMIT"/>
            </form>
          </div>
            <div className="about-contact-container">
              <h2>Contact Us</h2>
              <p>Email: <a href="mailto:northernshores@gmail.com">northernshores@gmail.com</a></p>
              <p>Phone: +92 312 1234567</p>
            <p>Address: Aptech  Campus, Main Road, Agodi, Nigeria</p>
        </div> 
    <Footer />
    </div>
  )
}

export default Contact















// import React from 'react';
// import '../Contact/Contact.css'
// import Footer from '../../Components/Footer/Footer';

// const Contact = () => {
//   return (
//     <div>
//    
//     </div>
//     <Footer />
//     </div>
//   );
// };

// export default Contact;
