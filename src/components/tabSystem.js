import React, { useState } from "react";
import "../styles/tabSystem.css";
const TabSystem = ({ setFormData, formData }) => {
  const [activeTab, setActiveTab] = useState("ride");

  const handleTabClick = (tabName) => {
    setFormData({ ...formData, bookingType: tabName });
    setActiveTab(tabName);
  };

  return (
    <div className="tab-container">
      <div
        className={`tab ${activeTab === "ride" && "active"}`}
        onClick={() => handleTabClick("ride")}
      >
        Ride
      </div>
      <div
        className={`tab ${activeTab === "rental" && "active"}`}
        onClick={() => handleTabClick("rental")}
      >
        Rental
      </div>
      <div
        className={`tab ${activeTab === "outstation" && "active"}`}
        onClick={() => handleTabClick("outstation")}
      >
        Out Station
      </div>
      <div
        className={`tab ${activeTab === "selfdriver" && "active"}`}
        onClick={() => handleTabClick("selfdriver")}
      >
        Self Driver
      </div>
    </div>
  );
};

export default TabSystem;
