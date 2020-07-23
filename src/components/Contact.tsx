import React, { useState } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

function Contact() {

  const refInTypeScript = React.useRef<HTMLDivElement>(null);
  const { ref = refInTypeScript} = useWebAnimations({
    keyframes: {
      transform: "translateY(0)  translateY(100%) ", 

    },
    timing: {
      duration: 2000, 
      iterations: 1, 
      direction: "alternate-reverse",
      easing: "ease-in", 
    },

  });

  const [name , setName] = useState('')
  const [phoneNumber , setPhoneNumber] = useState(0)
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')

  const fromSubmit = () =>{
    console.log(name, phoneNumber, email, message)
  }

  return (
    <div ref={ref}>
      <div className="my-5">
        <h1 className="text-center"> Contact </h1>
        <p className="text-center"> If you have any question , just leave a message</p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name='fullname' onChange={(e) => setName(e.target.value)} required className="form-control"  placeholder="Enter you full name" />

                <label htmlFor="numer">Phone Number</label>
                <input type="number" name='numer' className="form-control" onChange={(e) => setPhoneNumber(Number(e.target.value))}  placeholder="Enter you phone number" />
                <label htmlFor="email">Email address</label>
                <input type="email" name='email' required className="form-control" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter you email address" />
              <div className="form-group">
                <label htmlFor="msg">Message</label>
                <textarea required className="form-control" rows={5} name='msg' onChange={(e) => setMessage(e.target.value)}  ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Submit</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Contact;