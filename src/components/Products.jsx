import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';


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
        <ul className='grid grid-cols-3 gap-10 flex justify-center'>
            {products.map(product => (
                <li className='bg-pink-300' key={product.id}>
                    <img src={product.img} title={product.description} alt={product.name} className="object-scale-down h-60 w-96 bg-purple-300" />
                    <br />
                    {product.name} - {product.price} DKK 
                </li>

            ))}
        </ul>
        </div>
    )}