import React, { useContext } from "react";
import Search from "../layouts/Search";
import Capsules from "../launches/Capsules";

const Home = () => {
  return (
    <div>
      <h1>SpaceX Launchsss KUCING es (Newest to Oldest)</h1>
      <Search />
      <Capsules />
    </div>
  );
};

export default Home;
