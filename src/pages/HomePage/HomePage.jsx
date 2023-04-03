import React from "react";
import Intro from "../../components/Intro/Intro";
import NewProducts from "../../components/NewProducts/NewProducts";
import TopProducts from "../../components/TopProducts/TopProducts";
import Follow from "../../components/Follow/Follow";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Intro />
      <NewProducts />
      <TopProducts />
      <Follow />
    </div>
  );
};

export default HomePage;
