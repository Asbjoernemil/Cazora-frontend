import React, { useEffect, useState } from 'react';
import { getProducts, getProductsInCategory } from '../api';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import ProductModal from './ProductModal';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let productsData;

                if (selectedCategory !== '') {
                    // Fetch products from category
                    productsData = await getProductsInCategory(selectedCategory);

                } else {
                    // no cat --> fetch all
                    productsData = await getProducts();
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

    const openModal = (product) => {
        console.log("Selected Product:", product);
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className="flex justify-end text-cazora p-1 w-full">
                <Filter onCategoryChange={handleCategoryChange} />
            </div>

            <ul className='grid grid-cols-3 gap-10 flex justify-center text-center'>
                {products.map(product => (
                    <li className='bg-rose-200 rounded-md' key={product.id}>
                        <div onClick={() => openModal(product)}>
                            <img src={product.img} title={product.description} alt={product.name} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md" />
                            <br />
                            {product.name} - {product.price} DKK
                            <br />
                        </div>
                    </li>
                ))}
            </ul>

            <ProductModal isOpen={!!selectedProduct} onClose={closeModal} product={selectedProduct} />
        </div>
    );
}
