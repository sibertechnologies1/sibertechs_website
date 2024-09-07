import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import BackgroundImage from "../../assets/images/software.jpg";
import mobile1 from "../../assets/images/mobile1.jpg";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/siber_website/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.success);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative bg-gray-100 py-24">
        {/* Top Section with Background Image */}
        <div className="relative w-full h-96">
          <img
            src={BackgroundImage}
            alt="Background"
            className="object-cover w-full h-full absolute inset-0 brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6">Get In Touch</h2>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We’re here to assist you with any inquiries or support. Fill out the form below and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-6 lg:px-8 mt-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto border border-gray-300">
              <h4 className="text-blue-600 text-base font-medium mb-4">Contact Us</h4>
              <h2 className="text-gray-900 text-3xl font-semibold mb-6">Reach Out To Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  className="w-full h-14 px-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full h-14 px-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-14 px-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-48 px-4 py-3 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full h-12 text-center text-white text-base font-semibold rounded-lg bg-blue-600 shadow-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto border border-gray-300">
              <h4 className="text-blue-600 text-base font-medium mb-4">Our Location</h4>
              <h2 className="text-gray-900 text-3xl font-semibold mb-6">Find Us Here</h2>
              <p className="text-gray-700 text-lg mb-6">
                Our office is located in the heart of the city. Visit us to discuss your project or simply drop by to say hello!
              </p>
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <MdLocationOn className="text-blue-600 text-2xl" />
                  <p className="text-gray-600 text-lg">Navrongo, Upper East Region, Ghana</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-blue-600 text-2xl" />
                  <p className="text-gray-600 text-lg">Email: sibertechs@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhone className="text-blue-600 text-2xl" />
                  <p className="text-gray-600 text-lg">Phone: +233 548 529 284</p>
                </div>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={mobile1} className="object-cover w-full h-full" alt="Office Location" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
