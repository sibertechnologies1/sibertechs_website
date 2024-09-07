import React from "react";
import { FaRobot, FaCode, FaChartLine, FaShieldAlt, FaCloud, FaUserGraduate } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { RiVipCrownFill, RiTeamFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import AI from "./IMG/AI.png";
import Code from "./IMG/Code.png";
import DATASCIENCE from "./IMG/DATASCIENCE.png";
import Visa from "../../assets/Images/Visa.jpeg";
import MasterCard from "../../assets/Images/MasterCard.jpeg";
import PayPal from "../../assets/Images/PayPal.png";
import cyber from "../../assets/Images/cyber.jpg";
import cloud from "../../assets/Images/cloud.jpg";
import software from "../../assets/Images/software.jpg";

const Card2 = () => {
  return (
    <div className="px-8 py-16 bg-gray-100">
      {/* Trending Technologies Section */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        {/* Machine Learning Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-gray-200">
          <FaRobot className="text-4xl text-blue-500" />
          <img
            src={AI}
            className="w-28 h-28 object-cover rounded-full border-4 border-blue-100 mt-4"
            alt="Machine Learning"
          />
          <h2 className="mt-8 text-3xl font-bold text-gray-800">
            Machine Learning
          </h2>
          <p className="mt-6 text-gray-700 text-lg text-center">
            Delve into the world of algorithms and models that enable computers to learn and improve from data.
          </p>
          <ul className="mt-6 text-gray-700 text-left list-disc list-inside">
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
          </ul>
          <a
            href="/machine-learning"
            className="mt-6 text-blue-600 text-lg font-semibold hover:underline"
          >
            Learn More
          </a>
        </div>

        {/* Programming Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-blue-600 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-blue-700">
          <FaCode className="text-4xl text-white" />
          <img
            src={Code}
            className="w-28 h-28 object-cover rounded-full border-4 border-blue-300 mt-4"
            alt="Programming"
          />
          <h2 className="mt-8 text-3xl font-bold">Programming</h2>
          <p className="mt-6 text-lg text-center">
            Master the languages that power the technology around us. From web development to system programming.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Python for Data Science</li>
            <li>JavaScript for Web Development</li>
            <li>C++ for System Programming</li>
          </ul>
          <a href="/programming" className="mt-6 text-lg font-semibold hover:underline">
            Explore Languages
          </a>
        </div>

        {/* Data Science Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-gray-200">
          <FaChartLine className="text-4xl text-blue-500" />
          <img
            src={DATASCIENCE}
            className="w-28 h-28 object-cover rounded-full border-4 border-blue-100 mt-4"
            alt="Data Science"
          />
          <h2 className="mt-8 text-3xl font-bold text-gray-800">
            Data Science
          </h2>
          <p className="mt-6 text-gray-700 text-lg text-center">
            Uncover insights hidden within data. Combine statistics, programming, and domain expertise.
          </p>
          <ul className="mt-6 text-gray-700 text-left list-disc list-inside">
            <li>Data Visualization</li>
            <li>Predictive Analytics</li>
            <li>Big Data Technologies</li>
          </ul>
          <a href="/data-science" className="mt-6 text-blue-600 text-lg font-semibold hover:underline">
            Discover Techniques
          </a>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="flex flex-col justify-center items-center p-8 bg-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-gray-300">
        <AiFillCreditCard className="text-4xl text-gray-800" />
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Payment Methods
        </h2>
        <div className="mt-6 flex space-x-8">
          <img src={Visa} className="w-28 h-auto" alt="Visa" />
          <img src={MasterCard} className="w-28 h-auto" alt="MasterCard" />
          <img src={PayPal} className="w-28 h-auto" alt="PayPal" />
        </div>
        <p className="mt-6 text-gray-700 text-lg text-center">
          Choose your preferred payment method and proceed with confidence.
        </p>
        <a href="/payment-methods" className="mt-6 text-blue-600 text-lg font-semibold hover:underline">
          View Payment Options
        </a>
      </div>

      {/* Professional Development Section */}
      <div className="grid lg:grid-cols-3 gap-12 mt-16">
        {/* Cybersecurity Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-red-600 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-red-700">
          <FaShieldAlt className="text-4xl text-white" />
          <img
            src={cyber}
            className="w-28 h-28 object-cover rounded-full border-4 border-red-300 mt-4"
            alt="Cybersecurity"
          />
          <h2 className="mt-8 text-3xl font-bold">Cybersecurity</h2>
          <p className="mt-6 text-lg text-center">
            Protect your digital assets. Learn the essentials of cybersecurity and how to safeguard your data.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Network Security</li>
            <li>Threat Detection</li>
            <li>Incident Response</li>
          </ul>
          <a href="/cybersecurity" className="mt-6 text-lg font-semibold hover:underline">
            Secure Your Data
          </a>
        </div>

        {/* Cloud Computing Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-indigo-600 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-indigo-700">
          <FaCloud className="text-4xl text-white" />
          <img
            src={cloud}
            className="w-28 h-28 object-cover rounded-full border-4 border-indigo-300 mt-4"
            alt="Cloud Computing"
          />
          <h2 className="mt-8 text-3xl font-bold">Cloud Computing</h2>
          <p className="mt-6 text-lg text-center">
            Embrace the cloud revolution. Learn how cloud computing is transforming businesses worldwide.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Cloud Infrastructure</li>
            <li>Deployment Models</li>
            <li>Cost Optimization</li>
          </ul>
          <a href="/cloud-computing" className="mt-6 text-lg font-semibold hover:underline">
            Explore the Cloud
          </a>
        </div>

        {/* Professional Development Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-green-600 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-green-700">
          <FaUserGraduate className="text-4xl text-white" />
          <img
            src={software}
            className="w-28 h-28 object-cover rounded-full border-4 border-green-300 mt-4"
            alt="Professional Development"
          />
          <h2 className="mt-8 text-3xl font-bold">
            Professional Development
          </h2>
          <p className="mt-6 text-lg text-center">
            Advance your career with our professional development programs. Learn new skills and grow your expertise.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Leadership Training</li>
            <li>Project Management</li>
            <li>Communication Skills</li>
          </ul>
          <a href="/professional-development" className="mt-6 text-lg font-semibold hover:underline">
            Enhance Your Career
          </a>
        </div>
      </div>

      {/* Subscription Plans Section */}
      <div className="grid lg:grid-cols-3 gap-12 mt-16">
        {/* Premium Plan Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-yellow-500 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-yellow-600">
          <RiVipCrownFill className="text-4xl text-white" />
          <h2 className="mt-8 text-3xl font-bold">Premium Plan</h2>
          <p className="mt-6 text-lg text-center">
            Access exclusive features and priority support with our Premium Plan. Ideal for those seeking top-tier services.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Advanced Features</li>
            <li>Priority Support</li>
            <li>Exclusive Content</li>
          </ul>
          <a href="/premium-plan" className="mt-6 text-lg font-semibold hover:underline">
            Get Premium Access
          </a>
        </div>

        {/* Advanced Plan Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-blue-500 text-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-blue-600">
          <MdSecurity className="text-4xl text-white" />
          <h2 className="mt-8 text-3xl font-bold">Advanced Plan</h2>
          <p className="mt-6 text-lg text-center">
            The Advanced Plan offers enhanced features and comprehensive support. Perfect for deeper engagement.
          </p>
          <ul className="mt-6 text-white text-left list-disc list-inside">
            <li>Enhanced Features</li>
            <li>Comprehensive Support</li>
            <li>Extended Resources</li>
          </ul>
          <a href="/advanced-plan" className="mt-6 text-lg font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Free Plan Card */}
        <div className="flex flex-col justify-center items-center p-8 bg-gray-300 text-gray-800 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg border border-gray-400">
          <RiTeamFill className="text-4xl text-gray-700" />
          <h2 className="mt-8 text-3xl font-bold">Free Plan</h2>
          <p className="mt-6 text-lg text-center">
            Get started with our Free Plan, offering essential features and access at no cost.
          </p>
          <ul className="mt-6 text-gray-800 text-left list-disc list-inside">
            <li>Basic Features</li>
            <li>Limited Support</li>
            <li>Access to Core Content</li>
          </ul>
          <a href="/free-plan" className="mt-6 text-lg font-semibold hover:underline">
            Sign Up for Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
