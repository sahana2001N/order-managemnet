import React, { useState, useEffect } from 'react';
import axios from "axios";

const ItemList = () => {
    const [proList, setProList] = useState([]);
    const [product, setProduct] = useState({ name: '', price: '', description: '' });
    const [showAddForm, setShowAddForm] = useState(false);
    const [inventoryItems, setInventoryItems] = useState([]);
    const [discount, setDiscount] = useState('');

    useEffect(() => {
        axios.get('http://localhost:7070/api/product/allProducts')
            .then((resp) => {
                setProList(resp.data);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    useEffect(() => {
        if (showAddForm) {
            axios.get('http://localhost:7020/api/inventory/allItems')
                .then((resp) => {
                    setInventoryItems(resp.data);
                })
                .catch((error) => {
                    console.error('Error fetching inventory data:', error);
                });
        }
    }, [showAddForm]);

    const handleChange = (evt) => {
        setProduct({
            ...product,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSelectChange = (evt) => {
        const selectedProductName = evt.target.value;
        const selectedProduct = inventoryItems.find(item => item.name === selectedProductName);
        if (selectedProduct) {
            setProduct({
                name: selectedProduct.name,
                price: selectedProduct.price,
                description: selectedProduct.description
            });
        }
    };

    const handleDiscountChange = (evt) => {
        const discountValue = evt.target.value;
        const priceWithoutDiscount = parseFloat(product.price);
        if (!isNaN(priceWithoutDiscount) && !isNaN(discountValue)) {
            const discountedPrice = priceWithoutDiscount * (1 - discountValue / 100);
            setProduct({
                ...product,
                price: discountedPrice.toFixed(2) // Round to two decimal places
            });
            setDiscount(discountValue);
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Product submitted:', product);
        axios.post('http://localhost:7070/api/product/create', product)
            .then((resp) => {
                // Assuming the API returns the newly created product
                const newProduct = resp.data;
                setProList((prevProList) => [...prevProList, newProduct]);
                setProduct({ name: '', price: '', description: '' });
                setShowAddForm(false);
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    const handleDelete = (name) => {
        axios.delete(`http://localhost:7070/api/product/delete/${name}`)
            .then(() => {
                setProList((prevProList) => prevProList.filter(product => product.name !== name));
                console.log("Successfully deleted product with name:", name);
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
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
                                    <label>Product:</label>
                                    <select className="form-control" onChange={handleSelectChange} required>
                                        <option value="">Select a product</option>
                                        {inventoryItems.map(item => (
                                            <option key={item.name} value={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                                        <div className="input-group-append">
                                            <select className="custom-select" onChange={handleDiscountChange}>
                                                <option value="">Discount</option>
                                                <option value="5">5%</option>
                                                <option value="10">10%</option>
                                                <option value="15">15%</option>
                                                <option value="20">20%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <input type="text" className="form-control" name="description" value={product.description} onChange={handleChange} required />
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
