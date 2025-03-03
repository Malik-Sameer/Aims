import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        fetch("/", {
          method: "POST",
          body: new URLSearchParams(formData).toString(),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then(() => alert("Form submitted successfully!"))
          .catch((error) => console.error("Form submission error", error));
      };
      



  return (
    <div className="contact-main container">
        <div className="contact-col">
            <h3>Send us a massage <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact@Sameer.dev</li>
                <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
                <li><img src={location_icon} alt="" />Opposite to PU,Garden Town<br/>
                Lahore, Pakistan</li>
            </ul>
        </div>
        <div className="contact-col">
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
                <label>Your name</label>
                    <input type="text" name='name' placeholder="Enter your name" required/>
                    <label>Email</label>
                    <input type="tel" name="email" placeholder='Enter your email' required/>
                    <label>Write your massage here</label>
                    <textarea name="massage" rows="6" placeholder='Enter your massage' required></textarea>
                   <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact