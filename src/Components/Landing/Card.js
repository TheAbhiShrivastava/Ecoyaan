
import React from 'react';
import video from '../../Asset/ProductCuration.mp4';
import image1 from '../../Asset/OurStory4.png';

const CommunityInfo = () => {
  return (
    <div>
      <div className="p-6 w-11/12 bg-white rounded-xl flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:gap-x-16 mx-auto mb-24 mt-24">
        <div className="w-full md:w-3/4 lg:w-5/6">
          <h1 className="text-4xl font-bold text-green-950">
            Join our community in creating a more sustainable future for everyone
          </h1>
          <p className="text-gray-700 text-2xl text-left mt-8">
            At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
          </p>
          <p className="text-gray-700 text-2xl text-left mt-8">
            Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mt-2 md:mt-0 md:ml-16">
          <img 
            src='https://ecoyaan.com/images/Impact.png' 
            alt="Sustainable Future" 
            className="w-full h-96 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="p-6 w-11/12 bg-white rounded-xl flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:gap-x-16 mx-auto mb-24">
        <div className="w-full md:w-3/4 lg:w-5/6">
          <h1 className="text-4xl font-bold text-green-950">
            Carefully Curated Eco-friendly Products
          </h1>
          <p className="text-gray-700 text-2xl text-left mt-8">
            We believe that every purchase you make can have a positive impact on the planet and the future.
          </p>
          <p className="text-gray-700 text-2xl text-left mt-8">
            Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 mt-2 md:mt-0 md:ml-16">
          <video 
            controls 
            autoPlay 
            muted 
            loop
            src={video} 
            alt="Eco-friendly Products Video" 
            className="w-full h-96 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="p-6 w-11/12 bg-white rounded-xl flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:gap-x-16 mx-auto mb-24">
        <div className="w-full md:w-3/4 lg:w-5/6">
          <h1 className="text-4xl font-bold text-green-950">
            For businesses that care deeply about sustainability
          </h1>
          <p className="text-gray-700 text-2xl text-left mt-8">
            Do you run a business that is committed to sustainability in every aspect of your work?
          </p>
          <p className="text-gray-700 text-2xl text-left mt-8">
            Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
          </p>
          <p className="text-gray-700 text-2xl text-left mt-8">
            If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
          </p>
          <button className="bg-green-950 text-white text-xl py-2 px-3 mt-6 rounded-lg hover:bg-green-800 transition duration-300">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-4/5 mt-2 md:mt-0 md:ml-16">
          <img 
            src={image1} 
            alt="Sustainability in Business" 
            className="w-full h-96 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityInfo;


