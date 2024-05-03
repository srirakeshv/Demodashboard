import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Sidebar from "../../Components/Home/Sidebar";
import CenterContent from "../../Components/Home/CenterContent";
import RightSideBar from "../../Components/Home/RightSideBar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <CenterContent />
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
