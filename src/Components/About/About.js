import React from 'react'
import Navbar from '../Landing/Navbar'
import Footer from '../Landing/Footer'
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import CardTeam from './CardTeam'
const About = () => {
  return (<div>
    <div>
      <Navbar/>
    </div>
    <div>
<Card/>
<div>
      <Card2/>  
      <div>
        <Card3/>
        <div>
          <CardTeam/>
        </div>
        <Footer/>
      </div>
      </div>  
    </div>
  </div>
    
  )
}

export default About