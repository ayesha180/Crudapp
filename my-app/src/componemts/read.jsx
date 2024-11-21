import axios from "axios";
import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import { Link, useNavigate } from "react-router-dom"; 
import "../App.css";

export default function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    getData(); 
  }, []);

  const getData = () => {
    axios
      .get("https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP")
      .then((res) => {
        setData(res.data); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = (id) => {
    
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Users List</h1>
      <div className="d-flex justify-content-end mb-4">
        <button
          className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
          onClick={() => navigate("/create")} 
        >
          Add New User
        </button>
      </div>

      <table className="table table-bordered table-hover table-striped shadow-lg">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td className="d-flex justify-content-start">
               
                <Link
                  to={`/update/${eachData.id}`}
                  className="btn btn-warning mx-2 px-4 py-2 rounded-pill shadow-sm text-white"
                >
                  Update
                </Link>

               
                <Delete
                  id={eachData.id}
                  onDelete={handleDelete} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
