import React, { useEffect, useState } from 'react';
import { getProducts, getProductsInCategory } from '../api';
import { Link } from 'react-router-dom';
import Filter from './Filter';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let productsData;

                console.log("Selected Category in Products.jsx:", selectedCategory);
                if (selectedCategory !== '') {
                    // Fetch products from category
                    productsData = await getProductsInCategory(selectedCategory);
                    console.log("Fetched products in category in Products.jsx:", productsData);
                } else {
                    // no cat --> fetch all
                    productsData = await getProducts();
                    console.log("Fetched all products in Products.jsx:", productsData);

                }

                setProducts(productsData);
            } catch (error) {
                console.error('Fejl ved indlæsning af produkter: ', error);
            }
        };

        fetchData();
    }, [selectedCategory]);

    const handleCategoryChange = (productsData) => {
        setProducts(productsData);
    };

    return (
        <div>
            <div className="flex justify-end text-cazora p-1 w-full">
                <Filter onCategoryChange={handleCategoryChange} />
            </div>

            <ul className='grid grid-cols-3 gap-10 flex justify-center text-center'>
                {products.map(product => (
                    <li className='bg-rose-200 rounded-md' key={product.id}>
                        <img src={product.img} title={product.description} alt={product.name} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md" />
                        <br />
                        {product.name} - {product.price} DKK
                        <br />
                        <div className='m-3 p-2 flex justify-center'>
                            <Link to={`/update/${product.id}`} className='object-contain m-3 p-2 w-20 rounded-md bg-cazora hover:transparent hover:shadow'>Redigér</Link>
                            <Link to={`/delete/${product.id}`} className='object-contain m-3 p-2 w-20 rounded-md bg-cazora hover:transparent'>Slet</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
