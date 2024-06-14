
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({ images, contexts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotateImages = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(rotateImages);
  }, [images, interval]);

  const safeContexts =
    contexts && contexts.length === images.length
      ? contexts
      : images.map(() => ({
          title: 'Default Title',
          subtitle: 'Default Subtitle',
          buttonText: 'Default Button',
        }));

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="absolute left-10 top-16 w-full md:w-1/3 p-4 z-10 text-black">
        <div className="flex flex-col justify-center text-center h-full">
          <h1 className=" text-2xl md:text-4xl font-bold ">{safeContexts[currentIndex].title}</h1>
          <p className="text-lg md:text-xl mt-2">{safeContexts[currentIndex].subtitle}</p>
          <button className="absolute top-48 left-28 mb-4 px-5 md:px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm">
  {safeContexts[currentIndex].buttonText}
</button>



          
        </div>
      </div>
      <div className="w-full mb-36 h-screen relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-screen object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`
          }
          />
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      buttonText: PropTypes.string,
    })
  ),
  interval: PropTypes.number,
};

ImageCarousel.defaultProps = {
  contexts: [],
  interval: 3000,
};

export default ImageCarousel;
