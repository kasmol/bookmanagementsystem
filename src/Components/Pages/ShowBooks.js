
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// export default function ShowBook() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     async function fetchAllBooks() {
//       try {
//         const response = await axios.get("https://localhost:7079/api/Books");
//         setBooks(response.data);
//       } catch (error) {
//         console.error("Error fetching Accounts:", error);
//       }
//     }

//     fetchAllBooks();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Books</h1>
//       <table className="table table-dark">
//         <thead>
//           <tr>
//             <th>Account Name</th>
//             <th>Account Number</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.AccountName}</td>
//               <td>{book.AccountNumber}</td>
//               <td>{book.Status}</td>
//               <td>
//                 <NavLink to={`/update/${book.id}`}>
//                   <button className="btn btn-warning">Update</button>
//                 </NavLink>
//                 &nbsp;
//                 <NavLink to={`/delete/${book.id}`}>
//                   <button className="btn btn-danger">Delete</button>
//                 </NavLink>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function ShowBook() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    async function FetchAllbooks() {
      try {
        const response = await axios.get("https://localhost:7079/api/Books");
        setbooks(response.data);
      } catch (error) {
        console.error("Error fetching Accounts:", error);
      }
    } 

    FetchAllbooks();
  }, []);

  return (
    <div className="container">
      <h1>Accounts</h1>
      <table className="table table-dark">
        <thead>
          <tr>
        
            
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Status</th>
          
           <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
               <td>{book.accountName}</td>
               <td>{book.accountNumber}</td>
              <td>{book.status}</td>
             
             
              
              
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
