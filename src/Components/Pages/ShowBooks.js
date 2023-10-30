import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function ShowBook() {
  const [books, setBooks] = useState([]);

  async function fetchAllBooks() {
    try {
      const result = await axios.get('https://localhost:7079/api/Books');
      setBooks(result.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className='container'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="4">No books found</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.BookName}</td>
                <td>{book.AuthorName}</td>
                <td>{book.Availability}</td>
                <td>
                  
                  <NavLink to={`/update/${book.id}`}>
                    <button className='btn btn-warning'>Update</button>
                  </NavLink>
                  &nbsp;
                  <NavLink to={`/delete/${book.id}`}>
                    <button className='btn btn-danger'>Delete</button>
                  </NavLink>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}