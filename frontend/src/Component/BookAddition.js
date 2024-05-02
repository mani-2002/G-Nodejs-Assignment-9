import axios from "axios";
import React, { useState } from "react";

function BookAddition() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publication_year, setPublication_year] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/books/", {
        title,
        author,
        genre,
        publication_year,
      })
      .then((response) => {
        console.log("Book added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div className=" m-5 w-50 bg-info">
      <form>
        <h2>ADD BOOK</h2>
        <div>
          <label>Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Book Author</label>
          <input
            type="text"
            placeholder="Book Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Book genre</label>
          <input
            type="text"
            placeholder="Book genre"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Publication year</label>
          <input
            type="text"
            placeholder="Publication year "
            onChange={(e) => setPublication_year(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default BookAddition;
