import React, { useEffect, useState } from "react";
import AboutImage from "../../assets/Images/AboutImage.jpg"; // Replace with your actual image path
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import {
  FaAward,
  FaHandSparkles,
  FaLightbulb,
  FaUsers,
  FaQuoteLeft,
  FaQuoteRight,
  FaBriefcase,
  FaCogs,
} from "react-icons/fa";

import team1 from "../../assets/Images/team1.jpeg";
import team2 from "../../assets/Images/team2.png";

const About = () => {
  const [stats, setStats] = useState({ clients: 0, projects: 0, team: 0 });

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setStats({ clients: 150, projects: 320, team: 25 });
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-gray-50">
        {/* Full-width Image Section */}
        <div className="relative w-full h-96 mb-16">
          <img
            src={AboutImage}
            alt="About Us"
            className="object-cover w-full h-full absolute inset-0 rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-white text-4xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-white text-lg">
              Discover more about Siber Techs and our commitment to providing
              innovative IT solutions.
            </p>
          </div>
        </div>

        {/* Text Content and Team Section */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24 items-center">
            <div>
              <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 text-center lg:text-left">
                About Us
              </h4>
              <h2 className="text-gray-900 text-4xl font-semibold leading-10 mb-9 text-center lg:text-left">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Siber Techs is a leading IT consulting and design company
                committed to providing innovative solutions to our clients. Our
                team of experts specializes in various aspects of technology,
                ensuring that we deliver the best services to meet your needs.
                We pride ourselves on our ability to transform complex
                challenges into simple, efficient solutions.
              </p>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Our mission is to empower businesses through technology by
                providing top-notch consulting services and cutting-edge
                solutions. With years of experience and a passion for
                excellence, we are dedicated to helping our clients achieve
                their goals and drive innovation in their industries.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Whether you're looking to enhance your IT infrastructure,
                develop custom software, or explore new technological
                possibilities, Siber Techs is here to guide you every step of
                the way. Let us help you navigate the ever-evolving world of
                technology and unlock your full potential.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 text-3xl font-semibold mb-6 text-center lg:text-left">
                Meet Our Team
              </h3>
              <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="mb-6 lg:mb-0 flex-1">
                  <img
                    src={team1} // Replace with actual image path
                    alt="Team Member 1"
                    className="object-cover w-full h-64 rounded-lg shadow-lg"
                  />
                  <h4 className="text-gray-900 font-semibold mt-4">
                    Mr. Olufemi O. Olaewe
                  </h4>
                  <p className="text-gray-600">Lead Developer</p>
                </div>
                <div className="mb-6 lg:mb-0 flex-1">
                  <img
                    src="/path/to/team-member-2.jpg" // Replace with actual image path
                    alt="Team Member 2"
                    className="object-cover w-full h-64 rounded-lg shadow-lg"
                  />
                  <h4 className="text-gray-900 text-xl font-semibold mt-4">
                    Kwame Bones
                  </h4>
                  <p className="text-gray-600">Project Manager</p>
                </div>
                <div className="flex-1">
                  <img
                    src={team2} // Replace with actual image path
                    alt="Team Member 3"
                    className="object-cover w-full h-64 rounded-lg shadow-lg"
                  />
                  <h4 className="text-gray-900 font-semibold mt-4">
                    Tiroug B. Ebenezer
                  </h4>
                  <p className="text-gray-600">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-12 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaAward className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
              <p className="text-gray-600">
                Recognized for excellence in IT consulting and solutions,
                delivering top-notch services that exceed expectations.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaHandSparkles className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-600">
                Providing cutting-edge solutions to address your unique
                challenges and drive business growth.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaLightbulb className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced professionals is dedicated to delivering
                high-quality results and exceptional service.
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-12 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-4xl font-bold text-indigo-600 mb-4">
                {stats.clients}+
              </h3>
              <p className="text-lg font-semibold">Clients Served</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-4xl font-bold text-indigo-600 mb-4">
                {stats.projects}+
              </h3>
              <p className="text-lg font-semibold">Projects Completed</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-4xl font-bold text-indigo-600 mb-4">
                {stats.team}+
              </h3>
              <p className="text-lg font-semibold">Team Members</p>
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-12 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <FaBriefcase className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that
                drive growth and efficiency, ensuring our clients achieve their
                strategic goals.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <FaCogs className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in IT consulting and solutions, known for
                our excellence, creativity, and unwavering commitment to client
                success.
              </p>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-12 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaBriefcase className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-gray-600">
                Expert consulting services to guide you through your technology
                challenges and opportunities.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaCogs className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">
                Custom software development to meet your specific business needs
                and enhance efficiency.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <FaUsers className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
              <p className="text-gray-600">
                Reliable support and maintenance services to ensure your systems
                run smoothly and efficiently.
              </p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-16 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-gray-900 text-3xl font-semibold text-center mb-8">
              What Our Clients Say
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <FaQuoteLeft className="text-indigo-600 text-3xl mb-4" />
                <p className="text-gray-600 mb-4">
                  "Siber Techs has been an invaluable partner in our digital
                  transformation journey. Their expertise and commitment to
                  excellence are unparalleled."
                </p>
                <FaQuoteRight className="text-indigo-600 text-3xl" />
                <p className="text-gray-900 font-semibold mt-4">
                  Cobby Bossman
                </p>
                <p className="text-gray-600">CEO, Tech Innovative</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <FaQuoteLeft className="text-indigo-600 text-3xl mb-4" />
                <p className="text-gray-600 mb-4">
                  "Working with Siber Techs was a game-changer for our business.
                  Their innovative solutions and dedication truly set them
                  apart."
                </p>
                <FaQuoteRight className="text-indigo-600 text-3xl" />
                <p className="text-gray-900 font-semibold mt-4">Grat Dimafa</p>
                <p className="text-gray-600">CTO, Tech Innovators</p>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-16 text-center">
            <h3 className="text-gray-900 text-3xl font-semibold mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss how we can help you achieve your goals
              with innovative IT solutions.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
