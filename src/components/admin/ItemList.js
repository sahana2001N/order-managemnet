// import React, { useState,useEffect } from 'react';
// import axios from "axios";

// const ItemList = () => {
//     const [proList, setProList] = useState([]);
//     const [product, setProduct] = useState({ name: '', price: '' });
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         axios.get('http://localhost:7070/api/product/allProducts')
//             .then((resp) => {
//                 setProList(resp.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching product data:', error);
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
//         // After submission, hide the form
//         setShowAddForm(false);
//     };

//     const handleDelete = (id) => {
//         console.log("Deleting product with ID:", id);
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
//                                     <label>Product:</label>
//                                     <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Price:</label>
//                                     <input type="text" className="form-control" name="price" value={product.price} onChange={handleChange} required />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Description:</label>
//                                     <input type="text" className="form-control" name="description" value={product.description} onChange={handleChange} required />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Add Product</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {!showAddForm && (
//                 <div className="d-flex justify-content-end mb-2">
//                     <button type="button" className="btn btn-primary" onClick={() => setShowAddForm(true)}>Add Products</button>
//                 </div>
//             )}

//             <h1>Product List</h1>
//             <table className="table">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>Product</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {proList.map(pro =>
//                         <tr key={pro.id}>
//                             <td>{pro.name}</td>
//                             <td>{pro.price}</td>
//                             <td>{pro.description}</td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={() => handleDelete(pro.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default ItemList;

import React, { useState, useEffect } from 'react';
import axios from "axios";
const ItemList = () => {
    const [proList, setProList] = useState([]);
    const [product, setProduct] = useState({ name: '', price: '', description: '' });
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:7070/api/product/allProducts')
            .then((resp) => {
                setProList(resp.data);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
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
        axios.post('http://localhost:7070/api/product/create', product)
            .then((resp) => {
                // Add the newly created product to the product list
                setProList([...proList, resp.data]);
                // Clear the form fields
                setProduct({ name: '', price: '', description: '' });
                // Hide the form
                setShowAddForm(false);
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };
    const handleDelete = (name) => {
        axios.delete(`http://localhost:7070/api/product/delete/${name}`)
            .then(() => {
                // Remove the deleted product from the product list
                setProList(proList.filter(product => product.name !== name));
                console.log("Successfully deleted product with name:", name);
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };
    return (
        <>
            {/* Add product form */}
            {showAddForm && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h2>Add Products</h2>
                            <form onSubmit={handleSubmit}>
                                 <div className="form-group">
                                     <label>Product:</label>
                                     <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
                                 </div>
                                 <div className="form-group">
                                     <label>Price:</label>
                                     <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                                 </div>
                                 <div className="form-group">
                                     <label>Description:</label>
                                     <input type="text" className="form-control" name="description" value={product.description} onChange={handleChange} required />
                                 </div>
                                <button type="submit" className="btn btn-primary">Add Product</button>                             </form>
                        </div>
                    </div>
                </div>
            )}

            {!showAddForm && (
                <div className="d-flex justify-content-end mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => setShowAddForm(true)}>Add Products</button>
                </div>
            )}

            <h1>Product List</h1>
            <table className="table">
                <thead className="thead-dark">
                     <tr>
                         <th>Product</th>
                        <th>Price</th>
                         <th>Description</th>
                         <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                     {proList.map(pro =>
                        <tr key={pro.id}>
                            <td>{pro.name}</td>
                            <td>{pro.price}</td>
                            <td>{pro.description}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(pro.name)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};
export default ItemList;















