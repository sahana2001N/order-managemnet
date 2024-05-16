// import React, { useEffect, useState } from 'react';

// const Product=()=> {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       {/* Mapping over the users array and rendering a card component for each user */}
//       {users.map(user => (
//         <div key={user.id} className="card" style={{ width: '18rem', margin: '1rem' }}>
//           <div className="card-body">
//             <h5 className="card-title">{user.name}</h5>
//             <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//             <p className="card-text">Email: {user.email}</p>
//             <p className="card-text">Phone: {user.phone}</p>
//             <a href={`https://${user.website}`} className="card-link">{user.website}</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Product;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Product() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Mapping over the users array and rendering a card component for each user */}
//         {users.map(user => (
//           <div key={user.id} className="col-md-4 mb-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">{user.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//                 <p className="card-text">Email: {user.email}</p>
//                 <p className="card-text">Phone: {user.phone}</p>
//                 <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

     
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// function Product() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once

//   // Function to handle adding item to cart
//   const addToCart = (item) => {
//     // Here, you would typically update the cart state with the clicked item
//     console.log('Item added to cart:', item);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Mapping over the users array and rendering a card component for each user */}
//         {users.map(user => (
//           <div key={user.id} className="col-md-4 mb-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">{user.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
//                 <p className="card-text">Email: {user.email}</p>
//                 <p className="card-text">Phone: {user.phone}</p>
//                 {/* Pass the user object to the addToCart function */}
                
//                 <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the URL
    fetch('http://localhost:7070/api/product/allProducts')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to handle adding item to cart
  const addToCart = (user) => {
    // Navigate to the Cart component with user data as URL parameter
    navigate(`/cart?name=${user.name}&username=${user.username}&email=${user.email}&phone=${user.phone}`);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Mapping over the users array and rendering a card component for each user */}
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                <p className="card-text">Email: {user.price}</p>
                <p className="card-text">Phone: {user.description}</p>
                {/* Call addToCart function with user data when button is clicked */}
                <button onClick={() => addToCart(user)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
