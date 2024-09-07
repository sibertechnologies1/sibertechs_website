import React from "react";
import { IoMdPlay } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";

import Card1IMG1 from "./IMG/Card1IMG1.png";
import mobile from "../../assets/images/mobile.jpg";

const Card1 = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="h-full w-full"
        >
          <SwiperSlide>
            <img
              src={Card1IMG1}
              alt="Technology Solutions"
              className="object-cover w-full h-full opacity-60" // Subtle image overlay
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={mobile}
              alt="Uploaded Image"
              className="object-cover w-full h-full opacity-60"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center px-6 lg:px-12 py-12">
        <div className="flex flex-col text-center md:text-left max-w-2xl mx-auto md:mx-0 space-y-6">
          <p className="text-white text-sm uppercase tracking-wider font-medium">
            IT Design & Consulting
          </p>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Intelligent Technology Solutions <br />
            and Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
            We provide cutting-edge technology solutions tailored to your
            business needs, leveraging industry best practices and advanced
            technology to drive growth and streamline operations.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
            <a
              href="#"
              className="bg-white text-gray-900 hover:bg-gray-100 transition duration-300 rounded-full px-6 py-3 text-base md:text-lg font-semibold shadow-md hover:shadow-lg"
            >
              Our Services
            </a>
            <div className="flex items-center gap-3 text-white">
              <IoMdPlay className="bg-gray-800 p-3 rounded-full text-3xl md:text-4xl lg:text-5xl shadow-md hover:shadow-lg transition-shadow duration-300" />
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                Watch Video
              </span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md mt-12 md:mt-0">
          <img
            src={Card1IMG1}
            className="w-full rounded-lg shadow-xl border border-gray-700"
            alt="Technology Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Card1;
