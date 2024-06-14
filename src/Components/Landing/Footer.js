import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 p-6 md:p-8 xl:p-12">
        <div className="flex flex-col md:flex-row justify-start items-start md:justify-around text-start space-y-8 md:space-y-0">
          <div className="text-gray-500 text-md flex flex-col justify-start items-start space-y-4">
            <p className="text-2xl text-black font-semibold mb-2">Company</p>
            <ul className="space-y-2 text-xl">
              <li><a href="About">About Us</a></li>
              <li><a href="Sell on Ecoyaan">Sell on Ecoyaan</a></li>
              <li><a href="Careers">Careers</a></li>
            </ul>
          </div>
          <div className="text-gray-500 text-md flex flex-col justify-start items-start space-y-4">
            <p className="text-2xl text-black font-semibold mb-1">Links</p>
            <ul className="space-y-2 text-xl">
              <li><a href="https://ecoyaan.com/privacyPolicy">Privacy Policy</a></li>
              <li><a href="https://ecoyaan.com/termsOfUse">Terms of Use</a></li>
            </ul>
          </div>
          <div className="text-gray-500 text-md  flex flex-col justify-start items-start space-y-2">
            <p className="text-xl text-black font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-4 items-start">
              <a href="https://www.instagram.com/ecoyaan/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
              </a>
              <a href="https://www.linkedin.com/company/ecoyaan/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />
              </a>
              <a href="https://www.facebook.com/Ecoyaan/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
              </a>
            </div>
          </div>
          <div className="text-black text-md flex flex-col justify-start items-start space-y-4 w-11/12 lg:w-1/4">
            <p className="text-md mb-2 text-xl text-left">Subscribe to receive updates on blogs, future launches and more!</p>
            <form>
              <input type="email" placeholder="Your Email Address" className="subscription-input py-2 border rounded w-full" name="subscription" />
              <p className="text-xs mt-1">By subscribing, you agree to receive notifications <br /><a href="https://ecoyaan.com/privacyPolicy" className="text-xs no-underline text-blue-500 cursor-pointer">Privacy Policy</a></p>
              <button type="submit" className="w-full mt-4 btn-green p-2 bg-green-500 text-white rounded">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start text-start space-y-8 md:space-y-0 mt-8">
          <div className="text-gray-500 text-md flex flex-col justify-start items-start space-y-4 w-full md:w-1/2">
            <p className="text-2xl text-black font-semibold mb-2">Registered Address:</p>
            <div className="footer-images text-xl space-y-0">
              <p>1-N-12T-781/1</p>
              <p>Sri Krishna Vilasa,</p>
              <p>Urvastores,</p>
              <p>Ashoknagar(MR),</p>
              <p>Mangalore,</p>
              <p>Dakshina Kannada- 575006,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="text-gray-500 text-md flex flex-col justify-start items-start space-y-4 w-full md:w-1/2 md:pl-8">
            <p className="text-2xl text-black font-semibold mb-2">Legal Business Name:</p>
            <div className="footer-images space-y-0 text-xl">
              <p>Kindkarma E-Retail Private Limited</p>
              <p>CIN: U47912KA2023PTC182592</p>
              <p>Telephone: +91 9980490777</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 bg-black">
        <div className="text-center text-white text-xl bg-black mx-auto text-md">
          © 2023 - 2024, Ecoyaan TM
        </div>
      </div>
    </div>
  );
};

export default Footer;
