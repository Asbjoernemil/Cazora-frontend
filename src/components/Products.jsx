import { getProducts } from './api.js';
import React, { useEffect, useState } from 'react';


export default function Products() {
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
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.img} alt={product.description} className="photo_productPhoto" />
                    <br />
                    {product.name} - {product.price} DKK 
                </li>

            ))}
        </ul>
        </div>
    )}