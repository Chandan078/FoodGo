import React, { useEffect, useState, useRef } from 'react';
import '../Style/Home.css';
import Carousel from '../Components/Carousel/Carousel';
import FoodSection from '../Components/FoodSection/FoodSection';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // as soon as even 1px visible triggers true
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="home-header">
        <div className={`sticky-heading-wrapper ${!isVisible ? "hide" : ""}`}>
          <h1 className="sticky-heading">Welcome to FoodGo</h1>
          <p className="sticky-subtitle">Discover the best recipes and culinary delights!</p>
        </div>


        <div
          className="home-header-image"
          ref={imageRef}
        />
      </div>

      <div className='home-container'></div>

      <div className="home-food-section">
        <FoodSection />
      </div>

      <Carousel />
    </>
  );
};

export default Home;
