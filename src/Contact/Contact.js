import React from "react";

function Contact(){
  return (
    <>
    <div className="contact-page">
        <div className="container">
          <h1 className="title_Head3">Contact Me</h1>
          <p></p>

          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="Your Name"/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder="Your Email"/>
            </div>
            <div className="mb-3">
              <label For="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
    </div>
    </>
  );
}

export default Contact;
