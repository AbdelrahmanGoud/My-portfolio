import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Footer from './Footer';

function Contact() {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [masseage, setmasseage] = useState("");
    const [responseMessage, setResponseMessage] = useState(""); // State to store response message

    const sendEmail = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            phone: phone,
            email: email,
            masseage: masseage
        };

        emailjs.send('service_93ydza6', 'template_4hwqcij', data, 'k1bCngTxomUWPvS6P')
            .then((result) => {
                console.log(result.text);
                setResponseMessage("Your message has been sent successfully! Thank you for contacting us."); // Success message
            }, (error) => {
                console.log(error.text);
                setResponseMessage("Failed to send the message. Please try again."); // Failure message
            });

        // Reset form fields after submission
        setname("");
        setphone("");
        setemail("");
        setmasseage("");
    };

    return (
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
                                    <input type="text" name="user_name" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Full Name" className="form-control m-auto mt-3" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="contact-item form-group">
                                    <input type="number" name="user_phon_num" value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder="Phone Num" className="form-control m-auto mt-3" required />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="contact-item form-group">
                                    <input type="email" name="user_email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Email" className="form-control m-auto mt-3" required />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="contact-item form-group">
                                    <textarea placeholder="Message" value={masseage} onChange={(e) => { setmasseage(e.target.value) }} className="form-control m-auto mt-3"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="contact-item form-group">
                                    <button className="btn btn-success mt-3" type='submit' value='send'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Display response message */}
                    {responseMessage && (
                        <div className="alert alert-info mt-3">
                            {responseMessage}
                        </div>
                    )}

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
