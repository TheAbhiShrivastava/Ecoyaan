

import React from 'react';
import img2 from '../../Asset/about-us-sustainable-lifestyle-partner.png';

const Card = () => {
  return (
    <div>
      <div className="p-6  w-full bg-slate-100  flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:gap-x-16 mx-auto mb-8">
      <div className="p-6 w-full bg-slate-100  flex flex-col items-start space-y-4 mx-auto mb-24">
        <h2 className="text-3xl font-bold text-green-900">
          About Ecoyaan
        </h2>
        <p className="text-gray-700 text-xl text-left mt-8">
          At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
        </p>
        <p className="text-gray-700 text-xl text-left mt-8">
          We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-xl text-left mt-8">
          <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
          <li>Videos, posts, and quizzes on climate change and sustainability</li>
          <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
        </ul>
      </div>
        <div className="w-full md:w-1/2 lg:w-4/5 mt-2 md:mt-0 md:ml-16">
          <img 
            src={img2}
            alt="Sustainability in Business" 
            className="w-full h-96  mb-24 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
    
      </div>

    </div>
  );
}

export default Card;

