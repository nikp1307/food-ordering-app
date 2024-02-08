import RestaurantCardComponent from "./RestaurantCard";
import resList from "./utils/mockData";

const BodyComponent = (props) => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
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
