// import axios from "axios";
// import { useEffect, useState } from "react";
// const ItemList = () => {
//     const [empList, setEmpList] = useState('');
//     useEffect(() => {
//         console.log('useEffect');
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp.data);
//                 setEmpList(resp.data);
//             })
//     }, []);
//     return (
//         <>
//             <h1>View Products</h1>
//             <table>
//                 <thead>
//                     <th>Name</th> <th>Username</th> <th>Email</th> <th>City</th>
//                 </thead>
//                 <tbody>
//                     {empList && empList.map(emp =>
//                         <tr key={emp.id}>
//                             <td >{emp.name} </td>
//                             <td >{emp.username} </td>
//                             <td >{emp.email} </td>
//                             <td >{emp.address.city} </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// };
// export default ItemList;




// import axios from "axios";
// import { useEffect, useState } from "react";
// const ItemList = () => {
//     const [empList, setEmpList] = useState([]);
//     useEffect(() => {
//         console.log('useEffect');
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp.data);
//                 setEmpList(resp.data);
//             })
//     }, []);
//     const handleDelete = (id) => {
//         // Implement delete functionality here
//         console.log("Deleting employee with ID:", id);
//         // You can use axios.delete or any other method to delete the employee
//     };
//     return (
//         <div className="container mt-5">
//             <h1>Employee List</h1>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>City</th>
//                         <th>Delete</th> {/* New column for Delete button */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {empList.map(emp => (
//                         <tr key={emp.id}>
//                             <td>{emp.name}</td>
//                             <td>{emp.username}</td>
//                             <td>{emp.email}</td>
//                             <td>{emp.address.city}</td>
//                             <td>
//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() => handleDelete(emp.id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default ItemList;



//new code
// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// const ItemList = () => {
//     const [empList, setEmpList] = useState([]);
//     const [product, setProduct] = useState({ name: '', price: '' });
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 setEmpList(resp.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching employee data:', error);
//             });
//     }, []);

//     const handleChange = (evt) => {
//         setProduct({
//             ...product,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log('Product submitted:', product);
//         // Add logic to handle product submission
//         // For example, send product data to a backend API
//     };

//     const handleDelete = (id) => {
//         console.log("Deleting employee with ID:", id);
//         // Implement delete functionality here
//     };

//     return (
//         <>
//             {showAddForm && (
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-md-6">
//                             <h2>Add Products</h2>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-group">
//                                     <label>Product name:</label>
//                                     <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Price:</label>
//                                     <input type="text" className="form-control" name="price" value={product.price} onChange={handleChange} required />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Add Product</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div className="d-flex justify-content-end mb-2">
//                 <button type="button" className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>Add Products</button>
//             </div>

//             <h1>Employee List</h1>
//             <table className="table">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>Name</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {empList.map(emp =>
//                         <tr key={emp.id}>
//                             <td>{emp.name}</td>
//                             <td>{emp.username}</td>
//                             <td>{emp.email}</td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default ItemList;



import React, { useState,useEffect } from 'react';
import axios from "axios";

const ItemList = () => {
    const [empList, setEmpList] = useState([]);
    const [product, setProduct] = useState({ name: '', price: '' });
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                setEmpList(resp.data);
            })
            .catch((error) => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    const handleChange = (evt) => {
        setProduct({
            ...product,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Product submitted:', product);
        // Add logic to handle product submission
        // For example, send product data to a backend API
        // After submission, hide the form
        setShowAddForm(false);
    };

    const handleDelete = (id) => {
        console.log("Deleting employee with ID:", id);
        // Implement delete functionality here
    };

    return (
        <>
            {showAddForm && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h2>Add Products</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Product name:</label>
                                    <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input type="text" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {!showAddForm && (
                <div className="d-flex justify-content-end mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => setShowAddForm(true)}>Add Products</button>
                </div>
            )}

            <h1>Employee List</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map(emp =>
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.username}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default ItemList;

















