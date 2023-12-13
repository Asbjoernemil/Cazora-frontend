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
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-end mb-4">
                <Filter onCategoryChange={handleCategoryChange} />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <li key={product.id} className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer bg-rose-200">
                        <div onClick={() => openModal(product)}>
                            <img src={product.img} title={product.description} alt={product.name} className="object-contain h-64 w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-lg text-purple-600 mb-2">{product.price} DKK</p>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <ProductModal isOpen={!!selectedProduct} onClose={closeModal} productId={selectedProduct ? selectedProduct.id : null} />
        </div>
    );


}
