import { CDN_URL } from "./utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-props">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        {console.log(cuisines.join(","))}
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins to deliver!</h4>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
