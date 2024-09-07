import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import serviceImg from "../../assets/Images/serviceImg.jpg";
import 'animate.css/animate.min.css'; // Correct import path for animate.css
import { AiOutlineArrowRight } from 'react-icons/ai'; // Importing additional icon

const services = [
  {
    title: "Consulting",
    description:
      "Our expert consultants provide strategic guidance to help you navigate the complex landscape of IT and technology. We offer tailored solutions to optimize your IT infrastructure, streamline operations, and enhance overall efficiency.",
    icon: "🔍",
    details: [
      "Strategic IT Planning",
      "Infrastructure Optimization",
      "Operational Efficiency"
    ]
  },
  {
    title: "Software Development",
    description:
      "We specialize in creating custom software solutions that address your unique business needs. From web and mobile applications to complex enterprise systems, our development team delivers high-quality, scalable, and secure solutions.",
    icon: "💻",
    details: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions"
    ]
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud solutions provide scalable and flexible infrastructure to support your growing business. We offer cloud migration, management, and optimization services to ensure your applications and data are secure and accessible.",
    icon: "☁️",
    details: [
      "Cloud Migration",
      "Cloud Management",
      "Scalable Infrastructure"
    ]
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your organization from cyber threats with our comprehensive cybersecurity services. We offer risk assessments, vulnerability testing, and security solutions to safeguard your data and ensure compliance with industry standards.",
    icon: "🔒",
    details: [
      "Risk Assessments",
      "Vulnerability Testing",
      "Compliance Solutions"
    ]
  },
  {
    title: "IT Support",
    description:
      "Our IT support team is here to provide reliable and responsive assistance for all your technology needs. From troubleshooting and maintenance to proactive monitoring, we ensure your IT systems run smoothly and efficiently.",
    icon: "🛠️",
    details: [
      "24/7 Support",
      "Proactive Monitoring",
      "Troubleshooting & Maintenance"
    ]
  },
  {
    title: "Digital Marketing",
    description:
      "Enhance your online presence with our digital marketing services. We offer SEO, content marketing, and social media management to help you reach and engage with your target audience effectively.",
    icon: "📈",
    details: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management"
    ]
  }
];

const Services = () => {
  const [animationTriggers, setAnimationTriggers] = useState(
    new Array(services.length).fill(false)
  );

  useEffect(() => {
    const timeouts = services.map((_, index) =>
      setTimeout(() => {
        setAnimationTriggers((prev) => {
          const newTriggers = [...prev];
          newTriggers[index] = true;
          return newTriggers;
        });
      }, index * 300)
    );

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-gray-50">
        {/* Background Image Section */}
        <div className="relative w-full h-72 md:h-80 lg:h-96">
          <img
            src={serviceImg}
            alt="Services Background"
            className="object-cover w-full h-full absolute inset-0 rounded-lg shadow-md opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-800 opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Our Services</h2>
            <p className="text-base md:text-lg lg:text-xl text-white mb-8 max-w-3xl mx-auto">
              At Siber Techs, we offer a range of services designed to help
              businesses leverage technology for growth and success. Explore our
              offerings below and see how we can assist you in achieving your
              goals.
            </p>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="bg-indigo-800 text-white py-4 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-lg md:text-xl lg:text-2xl px-4">
            <span className="mr-8">🚀 Exciting News! New features added to our cloud solutions. 🚀</span>
            <span className="mr-8">🔒 Enhanced cybersecurity measures for your protection. 🔒</span>
            <span className="mr-8">💻 Our software development team is now offering AI integrations! 💻</span>
            <span className="mr-8">📈 Boost your digital presence with our latest marketing strategies. 📈</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform ${
                  animationTriggers[index] ? "animate__animated animate__fadeInUp" : ""
                }`}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
                <div className="relative z-10 p-6 md:p-8 transition-transform transform hover:scale-105">
                  <div className="text-4xl md:text-5xl lg:text-6xl text-indigo-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h4 className="text-md md:text-lg font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {service.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-indigo-600 text-white py-12 mt-16 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Let us help you achieve your business goals with our expert
            services. Contact us today to learn more.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          >
            Get in Touch <AiOutlineArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
