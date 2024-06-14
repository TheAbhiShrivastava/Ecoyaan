
  import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  const teamMembers = [
    {
      image: 'https://ecoyaan.com/images/about-us-social-media-team-01.png',
      name: 'SHRUTHI',
      role: 'SOCIAL MEDIA',
      description: 'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability Follow her small business.',
      link: 'https://www.instagram.com/shruthi',
      linkText: ' here'
    },
    {
      image: 'https://ecoyaan.com/images/about-us-social-media-team-02.png',
      name: 'URMIL',
      role: 'SOCIAL MEDIA',
      description: 'Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion Check out her business.',
      link: 'https://www.instagram.com/urmil',
      linkText: ' here'
    },
    {
      image: 'https://ecoyaan.com/images/about-us-product-team-01.png',
      name: 'DIVYA',
      role: 'UX DESIGN',
      description: 'Divya creates user-friendly and engaging interfaces for our platform Check out more of her work on Behance.',
      link: 'https://www.behance.net/divya',
      linkText: 'here'
    },
    {
      image: 'https://ecoyaan.com/images/about-us-product-team-02.png',
      name: 'PRASHANITH',
      role: 'ENGINEERING',
      description: 'Prashanith is our front-end engineer, who brings the UX designs to life'
    },
    {
      image: 'https://ecoyaan.com/images/about-us-product-team-03.png',
      name: 'SAI ABHILASH',
      role: 'ENGINEERING',
      description: 'Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform'
    },
    {
      image: 'https://ecoyaan.com/images/favicon.png',
      name: 'TEAM ECOYAAN',
      role: '???',
      description: 'This spot awaits you Check out our .',
      link: 'https://www.ecoyaan.com/careers',
      linkText: 'open positions '
    }
  ];
  
  const TeamCard = ({ image, name, role, description, link, linkText }) => {
    return (
      <div className="bg-white  rounded-lg overflow-hidden text-center p-6 flex flex-col items-center">
        <img src={image} alt={name} className="w-36 h-36 rounded-full object-cover mb-4"/>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-red-400 text-xl mb-2">{role}</p>
        <p className="mt-2 text-gray-700  text-lg mb-4">{description}</p>
        {link && (
            <div className='space-x-4'>
 <a href={link} className="text-blue-500  text-lg hover:underline mt-4">    {linkText}   <FontAwesomeIcon icon={faInstagram}  color="red" size='xl' />
          </a>
            </div>
         
        )}
      </div>
    );
  }
  
  const MeetTheTeam = () => {
    return (
      <div className="container mx-auto p-10 py-8">
        <h2 className="text-3xl md:text-4xl font-bold  text-green-950 mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    );
  }
  
  export default MeetTheTeam;
  