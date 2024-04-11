import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../firebase";

const Newsletter = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(database, "newsletter"), formData);
      // console.log("Document written with ID: ", docRef.id);

      alert("Sucessfully subscribed to our newsletter   :)");
    } catch (error) {
      console.error("Error adding email to databse: ", error);
      alert("An error occurred. Please try again later. :(");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-3">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </div>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border  focus:outline-none text-gray-900 text-sm rounded-lg  block w-full ps-10 p-[6px]    bg-[rgba(0,0,0,0)]  border-gray-600  placeholder-gray-400    d focus:ring-blue-500  focus:border-grey-500"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="relative mb-3">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border  focus:outline-none text-gray-900 text-sm rounded-lg  block w-full ps-10 p-[6px]     bg-[rgba(0,0,0,0)]  border-gray-600  placeholder-gray-400    d focus:ring-blue-500  focus:border-grey-500"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white   end-2.5 bottom-2.5 border   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-1 bg-none hover:bg-kridaBlue"
      >
        Join
      </button>
    </form>
  );
};

export default Newsletter;
