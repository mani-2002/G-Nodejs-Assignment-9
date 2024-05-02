import axios from "axios";
import React, { useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";

function BookUpdation() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publication_year, setPublication_year] = useState("");
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/books/${id}`, {
        title,
        author,
        genre,
        publication_year,
      });
      console.log("Book updated successfully!", response.data);
    } catch (error) {
      console.error("Error updating book:", error.message);
    }
  };

  return (
    <div className="m-5 w-20">
      <form>
        <h2>Add Book</h2>
        <div className="mb-2">
          <label>Book Title</label>
          <input
            type="text"
            placeholder="enter title,....."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Book Author</label>
          <input
            type="text"
            placeholder="enter author..,,"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Book genre</label>
          <input
            type="text"
            placeholder="enter genre..."
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Publication year</label>
          <input
            type="text"
            placeholder="enter publication year...."
            onChange={(e) => setPublication_year(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
}

export default BookUpdation;
