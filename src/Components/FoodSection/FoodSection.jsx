import React, { useEffect, useState, useRef } from "react";
import "./FoodSection.css";
import Foodcard from "../../Shared/Foodcard";
import { useSearch } from "../../Context/SearchContext";
import { BASE_URL } from "../../config";

const FoodSection = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const foodsPerPage = 8;
  const { searchTerm, setSearchTerm } = useSearch();
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const [sortBy, setSortBy] = useState("");

  const foodSectionRef = useRef(null); // scroll-to-top reference

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/foods?search=${encodeURIComponent(searchTerm)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }
        const data = await response.json();
        setFoods(data);
        setFilteredFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [searchTerm]);

  useEffect(() => {
    let result = [...foods];

    if (filter === "veg") {
      result = result.filter((food) => food.isVeg === true);
    } else if (filter === "nonveg") {
      result = result.filter((food) => food.isVeg === false);
    }

    if (searchTerm.trim()) {
      result = result.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredFoods(result);
    setCurrentPage(1); // reset to page 1 on any change
  }, [filter, foods, searchTerm, sortBy]);

  const totalPages = Math.ceil(filteredFoods.length / foodsPerPage);
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);

  const handleSearchSubmit = () => {
    setSearchTerm(localSearch);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    foodSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="food-section" id="food-section" ref={foodSectionRef}>
      <p className="food-title">Explore Foods</p>

      <div className="filter-search-row">
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "veg" ? "active" : ""}
            onClick={() => setFilter("veg")}
          >
            Veg
          </button>
          <button
            className={filter === "nonveg" ? "active" : ""}
            onClick={() => setFilter("nonveg")}
          >
            Non-Veg
          </button>

          <div className="sort-by-container">
            <label htmlFor="sort">Sort By:</label>
            <select
              id="sort"
              className="sort-by-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>

          <div className="search-box">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              placeholder="Search food..."
            />
            <button onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
      </div>

      {currentFoods.length === 0 ? (
        <div className="no-results">No foods found with that name.</div>
      ) : (
        <div className="food-grid">
          {currentFoods.map((food) => (
            <Foodcard key={food._id} food={food} />
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FoodSection;
