import React from "react";
import "../styles/bookingInfoStep.css";
import TabSystem from "./tabSystem";
const BookingInfoStep = ({
  onPrev,
  onSubmit,
  onChange,
  pickupLocation,
  destinationAirport,
  date,
  time,
  termsAndConditions,
  setFormData,
  formData,
}) => {
  return (
    <div className="bookingInfo">
      <div className="bookingInfoHeader">
        <div className="leftButton">
          <div className="bookingbookButton">Book</div>
          <div className="bookingcabButton">Airport cab</div>
        </div>
        <div className="manu">
          <button className="menuButton">&#9776;</button>
        </div>
      </div>
      <TabSystem setFormData={setFormData} formData={formData} />
      <div className="getRideInfo">
        <input
          id="input"
          type="text"
          placeholder="Pickup Location"
          name="pickupLocation"
          value={pickupLocation}
          onChange={onChange}
        />
        <input
          id="input"
          type="text"
          placeholder="Destination Airport"
          name="destinationAirport"
          value={destinationAirport}
          onChange={onChange}
        />

        <div className="upDownArrow">&#x296E;</div>
      </div>
      <div className="scheduleContainer">
        <label className="scheduleLabel">Schedule youe Ride</label>
        <div className="scheduleDateContainer">
          <input
            id="input"
            className="inputDate"
            type="date"
            placeholder="Pickup Date"
            name="date"
            value={date}
            onChange={onChange}
          />
          <input
            id="input"
            className="inputTime"
            type="time"
            placeholder="Pickup Time"
            name="time"
            value={time}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="checkTerms">
        <label>
          <input
            style={{
              marginRight: "10px",
            }}
            type="checkbox"
            name="termsAndConditions"
            checked={termsAndConditions}
            onChange={onChange}
          />
          I agree to the <a href="#/">Terms and Conditions</a>
        </label>
      </div>
      <div className="buttons">
        <button className="buttonBtn" onClick={onSubmit}>
          Next
        </button>
        <button className="buttonBtn" onClick={onPrev}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default BookingInfoStep;
