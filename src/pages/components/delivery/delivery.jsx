import React from "react";
import "./delivery.css";
import Filter from "../common/filters/filter";
import DeliveryCollections from "./deliveryCollections/deliveryCollections";
import TopBrands from "./topBrands/topBrands";
import ExploreSection from "../common/exploreSection/exploreSection";
import { restaurants } from "../../../data/restaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 4.0+"
  },
  {
    id: 3,
    title: "Safe & Hygienic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Great Offers"
  }
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Best Food in Bengaluru"
      />
    </div>
  );
};

export default Delivery;
