
import React from 'react';
import abhishekImage from '../../Asset/profile.png'; 
import sarwanImage from '../../Asset/profile 2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons';
const OurStory = () => {
  return (
    <div className=" w-full bg-gray-100 mx-auto p-10">
       <h2 className="text-3xl md:text-4xl left-0  font-bold text-green-950 mb-8">Our Story</h2>
        
      <div className="flex flex-col bg-gray-100  lg:flex-row  mb-8 ">
        <div className="flex flex-col items-end   lg:w-1/4 mb-8  ">
          <img src={abhishekImage} alt="Abhishek Rao" className="mb-4 w-3/6 h-auto py-5 transform transition-transform duration-300 hover:scale-105" />
          <img src={sarwanImage} alt="Sarwan Singh" className="w-3/6 h-auto transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="lg:w-11/12 lg:pl-8">
           <p className="text-gray-700 text-xl text-left mt-8">
            We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
          </p>
          <p className="text-gray-700 text-xl text-left mt-8 " >
            Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
          </p>
          <p className="text-gray-700 text-xl text-left mt-8 ">
            We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
          </p>
          <p className="text-gray-700 text-xl text-left mt-8">
            As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
          </p>
          <p className='text-gray-700 text-xl text-left mt-8 '>
            Connect with the founders on LinkedIn here: <a href="https://www.linkedin.com/in/abhishek-rao" className="text-blue-500 gap-6">Abhishek Rao  <FontAwesomeIcon icon={faLinkedin} color="blue"  gap="5"/></a>
             <a href="https://www.linkedin.com/in/sarwan-singh" className="text-blue-500 gap-6">      Sarwan Singh  <FontAwesomeIcon icon={faLinkedin}  color="blue" gap="5" /></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
