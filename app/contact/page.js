
"use client";

import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting LYURA!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Let's Start a <span>Conversation.</span></h1>
        <p className="contact-intro">
          Have a question about your order or our collection?
          We are here to help you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>We're here for you.</h2>
          <p className="contact-description">
            Whether you need help choosing a piece or have a question
            about your order, feel free to reach out to us.
          </p>

          <div className="contact-detail">
            <div className="contact-icon">@</div>
            <div>
              <h3>EMAIL US</h3>
              <p>hello@lyura.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">↗</div>
            <div>
              <h3>OUR PROMISE</h3>
              <p>Thoughtful service, always.</p>
            </div>
          </div>

          <div className="contact-note">
            <span>LYURA</span>
            <p>Elegance in every detail.</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send us a message</h2>
          <p className="form-subtitle">
            Fill in the details below and let us know how we can help.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What is your message about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-bottom">
        <p>MADE WITH CARE, WORN WITH CONFIDENCE</p>
        <h2>Thank you for choosing <span>LYURA.</span></h2>
      </section>
    </main>
  );
}
