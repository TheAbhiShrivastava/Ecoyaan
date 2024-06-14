import React from 'react'
import Navbar from './Navbar'
import ImageCarousel from './Image'
 import Footer from './Footer.js'
import CommunityInfo from './Card';



const images = [
  require('../../Asset/destop.png'),
  require('../../Asset/carousel-2.png'),
  require('../../Asset/carousel-3.png'),
  
];

const contexts = [
  {
    title: 'Are you a business that truly cares about sustainability?',
    subtitle: 'We would love to work with you',
    buttonText: 'Get In Touch'
  },
  {
    title: 'Follow us on Instagram',
    subtitle: 'For climate news, lifestyle tips, & updates',
    buttonText: 'Follow Us'
  },
  {
    title: 'Buy Less, Buy Better!',
    subtitle: 'Authentic source of truth for your sustainability needs.',
    buttonText: 'About Us'
  }
];



const Home = () => {
  return (
    <div>
       <div>
        <Navbar/>
        </div>
        <div>
    <ImageCarousel images={images} contexts={contexts} interval={5000} />    
        </div>
          <div>
   <CommunityInfo/>
          </div>
          <div>
            <Footer/>
          </div>
</div>
   
  )
}

export default Home