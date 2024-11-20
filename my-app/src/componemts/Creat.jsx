import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Make sure to import your custom CSS for additional styles

const Creat = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICKED");
    axios
      .post(
        "https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP",
        {
          name: name,
          email: email,
        },
        { headers: header }
      )
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        navigate("/Read"); // Redirect to Read page after successful submission
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center mb-4 text-primary">Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="nameInput"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="emailInput"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill shadow-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Creat;
