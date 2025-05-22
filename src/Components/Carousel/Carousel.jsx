import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
import ava05 from "../../assets/images/ava-5.jpg";
import "./carousel.css"; // Import your custom CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 2,
        },
      },
    ],
  };

  const reviews = [
    {
      text: "The gourmet burger was a culinary masterpiece! Juicy, flavorful, and perfectly cooked. Can't wait to return for another bite.",
      image: ava01,
      name: "John Doe",
      role: "Food Enthusiast",
    },
    {
      text: "The sushi platter was fresh and artfully presented. Each piece melted in my mouth. Highly recommend this place!",
      image: ava02,
      name: "Lia Frank",
      role: "Culinary Blogger",
    },
    {
      text: "The vegan pasta was a delightful surprise. Rich flavors and perfect texture. A must-try for plant-based food lovers.",
      image: ava03,
      name: "Eric Hawking",
      role: "Chef",
    },
    {
      text: "The chocolate lava cake was heavenly. Warm, gooey center with a perfectly baked exterior. Dessert perfection!",
      image: ava04,
      name: "Sara",
      role: "Sweet Tooth",
    },
    {
      text: "The seafood paella was bursting with flavor and generously loaded with fresh seafood. A delightful experience!",
      image: ava05,
      name: "Albert",
      role: "Food Critic",
    },
  ];

  return (
  
    <div className="testimonial-wrapper">
  <h2 className="testimonial-title">What Our Customers Say About Us</h2>
  <div className="slider-container">
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div className="testimonial" key={index}>
          <p className="review-text">{review.text}</p>
          <div className="reviewer-info">
            <img src={review.image} alt={review.name} className="review-img" />
            <div>
              <h6 className="reviewer-name">{review.name}</h6>
              <p className="reviewer-role">{review.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>


  );
};

export default Testimonials;
