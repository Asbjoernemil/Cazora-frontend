import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getOneParticularProduct } from '../api';

export default function DeleteProduct({ onCategoryChange }) {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const product = await getOneParticularProduct(id);
                setProductData(product);
                console.log('Fetched product data in DeleteProduct.jsx:', product);
            } catch (error) {
                console.error('Fejl ved indlæsning af produkt: ', error);
            }
        };

        fetchProductData();
    }, [id]);

    const handleDelete = async () => {
        try {
            console.log('Trying to delete product with ID:', id);
            // Perform API call to delete the product
            await deleteProduct(id);
            console.log('Product successfully deleted');

            // redirect user 
            navigate('/admin');
            onCategoryChange([]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {productData ? (
                <div className="grid grid-cols-1 gap-2">
                    <h1>Er du sikker på, at du vil slette {productData.name}?</h1>
                    <button onClick={handleDelete}>Slet produkt</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

