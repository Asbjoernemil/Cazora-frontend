import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';
import AdminButtons from './AdminButtons';


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
        <ul className='grid grid-cols-3 gap-10 flex justify-center text-center'>
            {products.map(product => (
                <li className='bg-rose-200 rounded-md' key={product.id}>
                    <img src={product.img} title={product.description} alt={product.name} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md" />
                    <br />
                    {product.name} - {product.price} DKK
                    <br />
                    <div className='m-3 p-2 flex justify-center'>
                    <AdminButtons {...product} />
                    </div>
                </li>

            ))}
        </ul>
        </div>
    )}