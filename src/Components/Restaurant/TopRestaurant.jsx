import React, { useEffect, useState } from 'react';
import './TopRestaurant.css';
import TopRestaurantCard from '../../Shared/TopRestaurantCard';
import { BASE_URL } from '../../config';

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/restaurants`);
        const data = await response.json();

        // Shuffle the restaurants using Fisher–Yates algorithm
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };

        setRestaurants(shuffleArray(data));
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setError('Failed to load restaurants. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!restaurants || restaurants.length === 0) {
    return <p>No restaurants found.</p>;
  }

  return (
    <section className="restaurant-section">
      <h2 className="section-title">Top Restaurants in Noida</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <TopRestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantSection;
