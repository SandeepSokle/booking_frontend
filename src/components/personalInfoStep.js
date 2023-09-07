import React from "react";
import "../styles/personalInfoStep.css";
const PersonalInfoStep = ({ onNext, onChange, name, phoneNumber, email }) => {
  return (
    <div className="personalInfo">
      <div className="personalInfoHeader">
        <div className="mainButton">
          <div className="bookButton">Book</div>
          <div className="cabButton">Airport cab</div>
        </div>
      </div>
      <div className="personalInfoInformation">Introducing</div>
      <div className="personalInfoDes">
        Hassle Free Airport Transfers Like Never Before.
      </div>
      <div className="personalInfoForm">
        <input
          id="input"
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          id="input"
          type="text"
          placeholder="Mobile Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <input
          id="input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <button className="nextButton" onClick={onNext}>
      &#x2B9E;
      </button>
    </div>
  );
};

export default PersonalInfoStep;
