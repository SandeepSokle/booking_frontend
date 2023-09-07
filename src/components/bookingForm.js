import React, { useState } from "react";
import PersonalInfoStep from "./personalInfoStep";
import BookingInfoStep from "./bookingInfoStep";
import axios from "axios";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    pickupLocation: "",
    destinationAirport: "",
    date: "",
    time: "",
    termsAndConditions: false,
    bookingType: "ride",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addData = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL_PROD}/booking/add`, {
        ...formData,
      });

      return true;
    } catch (err) {
      return false;
    }
  };

  const checkValidation = () => {
    const {
      name,
      phoneNumber,
      email,
      pickupLocation,
      destinationAirport,
      date,
      time,
      termsAndConditions,
    } = formData;
    try {
      if (!name || name === "") throw new Error("Please Enter Name");
      if (!phoneNumber || phoneNumber === "")
        throw new Error("Please Enter Phone Number");
      if (!email || email === "") throw new Error("Please Enter Email Address");
      if (!pickupLocation || pickupLocation === "")
        throw new Error("Please Enter Pickup Location");
      if (!destinationAirport || destinationAirport === "")
        throw new Error("Please Enter Destination Airport!");
      if (!date || date === "")
        throw new Error("Please Enter Date of Booking!");
      if (!time || time === "")
        throw new Error("Please Enter Time of Booking!");
      if (!termsAndConditions)
        throw new Error("Please Check Terms And Conditions!");
      return true;
    } catch (err) {
      toast(err.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
  };

  const handleSubmit = async () => {
    const formValidate = checkValidation();
    if (!formValidate) return;

    const data = await addData();
    if (data) {
      toast("Information sent Successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        pickupLocation: "",
        destinationAirport: "",
        date: "",
        time: "",
        termsAndConditions: false,
        bookingType: "ride",
      });
      setStep(1);
    }
  };

  return (
    <div className="booking-form">
      {step === 1 && (
        <PersonalInfoStep
          onNext={handleNext}
          onChange={handleChange}
          {...formData}
        />
      )}
      {step === 2 && (
        <BookingInfoStep
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          onChange={handleChange}
          setFormData={setFormData}
          formData={formData}
          {...formData}
        />
      )}
    </div>
  );
};

export default BookingForm;
