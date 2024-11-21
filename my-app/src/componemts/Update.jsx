import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css"; 

const Update = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(""); 

  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((error) => {
        setError("Failed to fetch user data.");
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    axios
      .put(`https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        setIsLoading(false); 
        navigate("/read"); 
      })
      .catch((err) => {
        setIsLoading(false); 
        setError("Failed to update the user.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4 rounded">
        <h2 className="text-center mb-4 text-primary">Update User</h2>
        {error && <p className="text-danger text-center">{error}</p>} 
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 rounded-pill shadow-sm"
            disabled={isLoading} 
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
