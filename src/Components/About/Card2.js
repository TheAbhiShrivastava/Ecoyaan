
import React from 'react';
import trustImage from '../../Asset/Trust.png';
import authenticityImage from '../../Asset/Authenticity.png';
import impactImage from '../../Asset/Impact.png';
import funEngagingImage from '../../Asset/FunAndEngaging.png';

const values = [
  {
    title: 'Trust',
    description: 'We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.',
    image: trustImage
  },
  {
    title: 'Authenticity',
    description: 'We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.',
    image: authenticityImage
  },
  {
    title: 'Impact',
    description: 'We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.',
    image: impactImage
  },
  {
    title: 'Fun & Engaging',
    description: 'Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.',
    image: funEngagingImage
  }
];

const OurValues = () => {
  return (
    <div className="p-6 w-full bg-white flex flex-col  mx-auto mb-24">
      <h2 className="text-3xl md:text-4xl left-0 font-bold text-green-950 mb-8">
        Our Values
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 w-full md:w-3/4 lg:w-full">
        {values.map((value, index) => (
          <div key={index} className=" bg-white p-6 rounded-xl  flex items-start space-x-4">
            <img src={value.image} alt={value.title} className="w-16 h-16 object-cover rounded-full transform transition-transform duration-300 hover:scale-105" />
            <div>
              <h3 className="text-2xl font-bold text-green-950 mb-2">{value.title}</h3>
              <p className="text-gray-700 text-lg">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurValues;

