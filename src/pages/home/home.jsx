import React, { useState } from "react";
import Header from "../components/common/header/header";
import TabOption from "../components/common/tabOption/tabOption";
import Footer from "../components/common/footer/footer";
import Delivery from "../components/delivery/delivery";
import DiningOut from "../components/diningOut/diningOut";
import Nightlife from "../components/nightlife/nightlife";

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return (
        <div>
          <Delivery />
        </div>
      );
    case "Dining Out":
      return (
        <div>
          <DiningOut />
        </div>
      );
    case "Nightlife":
      return (
        <div>
          <Nightlife />
        </div>
      );

    default:
      return (
        <div>
          <Delivery />
        </div>
      );
  }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
};

export default Home;
