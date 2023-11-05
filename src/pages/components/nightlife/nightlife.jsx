import React from "react";
import "./nightlife.css";
import Collection from "../common/collection/collection";
import Filter from "../common/filters/filter";
import ExploreSection from "../common/exploreSection/exploreSection";
import { nightLife } from "../../../data/nightLife";

const nightLifeFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id: 2,
    icon: <i class="fi fi-ss-crown"></i>,
    title: "Gold"
  },
  {
    id: 3,
    title: "Rating: 4.0+"
  },
  {
    id: 4,
    title: "Pubs & Bars"
  }
];

const collectionList = [
  {
    id: 1,
    title: "24 Finest Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623276.png",
    places: "23 places"
  },
  {
    id: 2,
    title: "19 Best Bars $ Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
    places: "20 places"
  }
];

const Nightlife = () => {
  return <div>
    <Collection list={collectionList} />
    <div className="max-width">
      <Filter filterList={nightLifeFilters}/>
      </div>
      <ExploreSection list={nightLife} collectionName="Nightlife Restaurants in Bengaluru"/>
  </div>;
};

export default Nightlife;
