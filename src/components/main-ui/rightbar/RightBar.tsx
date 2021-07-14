import React from "react";
import SearchBar from "./SearchBar";
import Trends from "./Trends";
import WhoToFollows from "./WhoToFollows";

const RightBar: React.FC = () => {
  return (
    <div className="hidden lg:block p-2 sticky right-0 top-0 h-screen max-h-screen w-[350px]">
      <SearchBar />
      <Trends />
      <WhoToFollows />
    </div>
  );
};

export default RightBar;
