import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaBullhorn,
  FaHeadset,
} from "react-icons/fa";
import Modal from "../Modal/Modal"; // Corrected import path

const FeatureCard = ({ icon, title, description, onClick }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer"
    onClick={onClick}
  >
    <div className="text-blue-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const GetStarted = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Journey with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover our wide range of services and find the perfect solution to
            meet your needs. Whether you're looking for custom software or
            digital marketing, we're here to help.
          </p>
          <a
            href="#services"
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </a>
        </div>

        <div id="services" className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCode />}
              title="Custom Software"
              description="Get tailored software solutions designed to fit your unique requirements and business goals."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      Custom Software
                    </h4>
                    <p>
                      Our custom software solutions are crafted to meet your
                      specific needs and business objectives. Whether you're
                      looking for enterprise-level applications or bespoke
                      software, our team is here to deliver top-notch results
                      that drive efficiency and growth.
                    </p>
                  </div>
                )
              }
            />
            <FeatureCard
              icon={<FaLaptopCode />}
              title="Web Development"
              description="Build a strong online presence with our cutting-edge web development services."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      Web Development
                    </h4>
                    <p>
                      Our web development services ensure a powerful online
                      presence for your brand. From stunning front-end designs
                      to robust back-end systems, we create websites that
                      deliver exceptional user experiences and meet your
                      business goals.
                    </p>
                  </div>
                )
              }
            />
            <FeatureCard
              icon={<FaRocket />}
              title="Mobile App Development"
              description="Launch your ideas with high-performance mobile applications for all platforms."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      Mobile App Development
                    </h4>
                    <p>
                      Transform your ideas into fully functional mobile apps
                      with our expert development team. We build
                      high-performance apps for both iOS and Android platforms,
                      ensuring a seamless experience for your users and driving
                      engagement.
                    </p>
                  </div>
                )
              }
            />
            <FeatureCard
              icon={<FaMobileAlt />}
              title="Responsive Design"
              description="Ensure your website looks great on any device with our responsive design solutions."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      Responsive Design
                    </h4>
                    <p>
                      Our responsive design services guarantee that your website
                      performs flawlessly on all devices. We create adaptive
                      layouts and user interfaces that provide an optimal
                      viewing experience across desktops, tablets, and
                      smartphones.
                    </p>
                  </div>
                )
              }
            />
            <FeatureCard
              icon={<FaBullhorn />}
              title="Digital Marketing"
              description="Enhance your brand's visibility and reach with our comprehensive digital marketing strategies."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      Digital Marketing
                    </h4>
                    <p>
                      Elevate your brand's presence with our digital marketing
                      expertise. From SEO and social media campaigns to content
                      marketing and PPC, we offer strategies that drive traffic,
                      increase conversions, and boost your online visibility.
                    </p>
                  </div>
                )
              }
            />
            <FeatureCard
              icon={<FaHeadset />}
              title="24/7 Support"
              description="Receive top-notch support anytime with our dedicated 24/7 customer service."
              onClick={() =>
                openModal(
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">
                      24/7 Support
                    </h4>
                    <p>
                      Our dedicated support team is available around the clock
                      to assist you with any issues or inquiries. Whether you
                      need technical support or have questions about our
                      services, we're here to provide prompt and effective
                      assistance.
                    </p>
                  </div>
                )
              }
            />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Service Details">
        {modalContent}
      </Modal>

      <Footer />
    </>
  );
};

export default GetStarted;
