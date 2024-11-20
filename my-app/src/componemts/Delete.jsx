import React from "react";
import axios from "axios";

export default function Delete({ id, onDelete }) {
  const handleDelete = () => {
    axios
      .delete(`https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP/${id}`) // Include the `id` in the URL
      .then(() => {
        alert("User deleted successfully");
        onDelete(id); // Notify parent component about the deletion
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}
