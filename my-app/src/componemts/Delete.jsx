import React, { useState } from "react";
import axios from "axios";

export default function Delete({ onDelete, id }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    axios
      .delete(`https://673de2070118dbfe86092dae.mockapi.io/CRUDAPP/${id}`)
      .then(() => {
        setIsDeleting(false);
        onDelete(id);
      })
      .catch((error) => {
        setIsDeleting(false);
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
