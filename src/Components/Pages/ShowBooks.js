// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { NavLink } from 'react-router-dom';

// // const columns = ['Book Name', 'Author Name', 'Availability'];

// // export default function ShowBook() {
// //   const [books, setBooks] = useState([]);

// //   async function fetchAllBooks() {
// //     try {
// //       const result = await axios.get('https://localhost:7079/api/Books');
// //       setBooks(result.data);
// //     } catch (error) {
// //       console.error('Error fetching books:', error);
// //     }
// //   }

// //   useEffect(() => {
// //     fetchAllBooks();
// //   }, []);

// //   return (
// //     <div className='container'>
// //       <table className='table table-dark'>
// //         <thead>
// //           <tr>
// //             <th>Book Name</th>
// //             <th>Author Name</th>
// //             <th>Availability</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {books.length === 0 ? (
// //             <tr>
// //               <td colSpan="4">No books found</td>
// //             </tr>
// //           ) : (
// //             books.map((book) => (
// //               <tr key={book.id}>
// //                 <td>{book.BookName}</td>
// //                 <td>{book.AuthorName}</td>
// //                 <td>{book.Availability}</td>
// //                 <td>

// //                   <NavLink to={`/update/${book.id}`}>
// //                     <button className='btn btn-warning'>Update</button>
// //                   </NavLink>
// //                   &nbsp;
// //                   <NavLink to={`/delete/${book.id}`}>
// //                     <button className='btn btn-danger'>Delete</button>
// //                   </NavLink>
// //                 </td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';

// const columns = ['Book Name', 'Author Name', 'Availability'];

// export default function ShowBook() {
//   const [books, setBooks] = useState([]);

//   async function fetchAllBooks() {
//     try {
//       const result = await axios.get('https://localhost:7079/api/Books');
//       setBooks(result.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   }

//   useEffect(() => {
//     fetchAllBooks();
//   }, []);

//   return (
//     <div className='container'>
//       <table className='table table-dark'>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column}>{column}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.length === 0 ? (
//             <tr>
//               <td colSpan={columns.length + 1}>No books found</td>
//             </tr>
//           ) : (
//             books.map((book) => (
//               <tr key={book.id}>
//                 {columns.map((column) => (
//                   <td key={column}>{book[column.replace(' ', '')]}</td>
//                 ))}
//                 <td>
//                   <NavLink to={`/update/${book.id}`}>
//                     <button className='btn btn-warning'>Update</button>
//                   </NavLink>
//                   &nbsp;
//                   <NavLink to={`/delete/${book.id}`}>
//                     <button className='btn btn-danger'>Delete</button>
//                   </NavLink>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function ShowBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchAllBooks() {
      try {
        const response = await axios.get("https://localhost:7079/api/Books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchAllBooks();
  }, []);

  return (
    <div className="container">
      <h1>Books</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.availability}</td>
              <td>
                <NavLink to={`/update/${book.id}`}>
                  <button className="btn btn-warning">Update</button>
                </NavLink>
                &nbsp;
                <NavLink to={`/delete/${book.id}`}>
                  <button className="btn btn-danger">Delete</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
