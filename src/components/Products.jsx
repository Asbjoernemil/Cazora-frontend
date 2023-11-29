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
        <ul className='list_productList'>
            {products.map(product => (
                <li className='listItem_clothes' key={product.id}>
                    <img src={product.img} title={product.description} alt={product.name} className="photo_productPhoto" />
                    <br />
                    {product.name} - {product.price} DKK 
                </li>

            ))}
        </ul>
        </div>
    )}