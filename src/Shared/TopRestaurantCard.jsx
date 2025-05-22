import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../Style/TopRestaurantCard.css";

const TopRestaurantCard = ({ restaurant = {} }) => {
  const {
    id = "",
    name = "Unnamed Restaurant",
    image = "https://logo.clearbit.com/pizzahut.com",
    rating = 0,
    description = "Description not available",
    cuisines = [],
    address = {},
    is_open = false,
  } = restaurant;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="restaurant__card">
      <div className="restaurant__img">
        <Link to={`/restaurant/${id}`} onClick={handleScrollToTop}>
          <img src={image} alt={name} />
        </Link>
        <span className={is_open ? "open" : "closed"}>
          {is_open ? "Open Now" : "Closed"}
        </span>
      </div>


      <div className="title&rating">
      <h3 className="restaurant__title">
        <Link to={`/restaurant/${id}`} onClick={handleScrollToTop}>
          {name}
        </Link>
      </h3>

      <div className="restaurant__rating">★ {rating ? rating.toFixed(1) : "Not Rated"}</div>
        </div>

      <div className="restaurant__content">
        <span>{cuisines.length > 0 ? cuisines.join(", ") : "Various Cuisines"}</span>
        <span className="restaurant__desc">{description}</span>
        {address && (
          <span className="restaurant__address">
            <FaMapMarkerAlt style={{ marginRight: "5px", color: "#555" }} />
            {address.street_addr || "Sector-135"}, {address.city || "Noida"},{" "}
            {address.state || ""} {address.zipcode || "201301"}
          </span>
        )}

        <button className="booking__btn">
          {/* <Link to={`/restaurant/${id}`} onClick={handleScrollToTop}>
            Book Table
          </Link> */}
          <Link to="/RestaurantSuccess" onClick={handleScrollToTop}>
            Book Table
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TopRestaurantCard;
