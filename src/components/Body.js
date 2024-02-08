import RestaurantCardComponent from "./RestaurantCard";
import { useState } from "react";
import resList from "./utils/mockData";

const BodyComponent = (props) => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked!");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCardComponent
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
