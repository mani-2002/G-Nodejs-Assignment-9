import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books/");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div className="p-4 bg-white">
      <table className="table">
        <thead className="p-6">
          <tr>
            <th className="text-black">id</th>
            <th className="text-black">title</th>
            <th className="text-black">author</th>
            <th className="text-black">genre</th>
            <th className="text-black">year</th>
            <th className="text-black">update</th>
            <th className="text-black">delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publication_year}</td>
              <td>
                <Link to={`update/${book.id}`} className="btn">
                  Update
                </Link>
              </td>
              <td>
                <button className="btn" onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
