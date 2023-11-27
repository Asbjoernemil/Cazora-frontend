// App.jsx
import React, { useEffect, useState } from 'react';
import { getProducts } from './api.js';

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Fejl ved indlæsning af produkter: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Genbrugstøjbutik</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price} DKK
                        <img src={product.img} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
}




