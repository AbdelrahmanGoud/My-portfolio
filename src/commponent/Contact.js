import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact()
{
          const [name,setname]=useState("");
          const [phone,setphone]=useState("");
          const [email,setemail]=useState("");
          const [masseage,setmasseage]=useState("");

          const sendEmail = (e) => {
          e.preventDefault();
          let data ={
           name:name,
           phone:phone,
           email:email,
           masseage:masseage
          }  
          emailjs.send('service_tzv61v2', 'template_c55m1ej', data, 'k1bCngTxomUWPvS6P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          
          console.log("email sent");
          setname("");
          setphone("");
          setemail("");
          setmasseage("");
                  
                  };
   return(
      <>
      <section className="contact-sec">
      <div className="container contact-conten">
       <div className="title-contact">
       <div className="title-contact-one">
          <h2>Contact</h2>
       <div className="title-contact-two">
       <h3>Contact</h3>
       </div>  
       </div>
       </div>
       <h2 className="my-3 text-center">Let's work together.</h2> 
      <form onSubmit={sendEmail}>
      <div className="row">
      <div className="col-md-6 mb-3">
      <div className="contact-item form-group">
       <input type="text" name="user_name" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Full Name" className="form-control m-auto mt-3"></input>
       </div>    
      </div>
      <div className="col-md-6 mb-3">
      <div className="contact-item form-group">
       <input type="number" name="user_phon_num" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Phone Num" className="form-control m-auto mt-3"></input>
       </div>    
      </div>
      <div className="col-md-12 mb-3">
      <div className="contact-item form-group">
       <input type="email" name="user_email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email" className="form-control m-auto  mt-3"></input>
       </div>    
      </div>
      <div className="col-md-12 mb-3">
      <div className="contact-item form-group">
          <textarea placeholder="Message" value={masseage} onChange={(e)=>{setmasseage(e.target.value)}} className="form-control m-auto mt-3"></textarea>
       </div>    
      </div>
      <div className="col-md-12 mb-3">
      <div className="contact-item form-group">
          <button className="btn btn-success mt-3" type='submit'>Send Message</button>
       </div>    
      </div>
      </div> 
      </form> 
      </div>    
      </section>
      </>    
   )       
}
export default Contact;