import React, { useEffect, useState } from 'react';
import { getOneParticularProduct, getProducts, getProductsInCategory, getReservations } from '../api';
import { Link } from 'react-router-dom';
import Filter from './Filter';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [reservedProducts, setReservedProducts] = useState([]);
    const [selectedCategory] = useState('');
    const [showReserved, setShowReserved] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let productsData;

                if (showReserved) {
                    // Fetch reserved products
                    productsData = await getReservations();
                } else if (selectedCategory !== '') {
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
    }, [selectedCategory, showReserved]);

    const handleCategoryChange = (productsData) => {
        setProducts(productsData);
    };

    const toggleShowReserved = async () => {
        setShowReserved(!showReserved);

        if (!showReserved) {
            try {
                const reservedProductsData = await getReservations();
                setReservedProducts(reservedProductsData);
            } catch (error) {
                console.error('Fejl ved indlæsning af reserverede produkter: ', error);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-start items-center text-cazora p-1 w-full">
                <Link to="/create" className="px-4 py-2 text-white bg-cazora rounded-md border border-cazora hover:bg-transparent hover:text-cazora hover:border-cazora transition-all duration-300">
                    Opret nyt produkt
                </Link>
                <button
                    onClick={toggleShowReserved}
                    className="px-4 py-2 text-white bg-cazora rounded-md border border-cazora hover:bg-transparent hover:text-cazora hover:border-cazora transition-all duration-300"
                >
                    {showReserved ? 'Vis alle produkter' : 'Vis reserverede produkter'}
                </button>
            </div>

            {!showReserved && (
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
            )}
            {/* Show reserved products */}

            {showReserved && (
                <div>
                    <div className="flex justify-center text-cazora p-1 w-full">
                        <p className="text-lg font-semibold text-cazora">Reserverede Produkter</p>
                    </div>
                    <ul className='grid grid-cols-3 gap-10 flex justify-center text-center'>
                        {reservedProducts.map(reservedProduct => (
                            <li className='bg-rose-200 rounded-md p-4' key={reservedProduct.id}>
                                <img src={reservedProduct.product.img} title={reservedProduct.product.description} alt={reservedProduct.product.name} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md mb-4" />
                                <img src={reservedProduct.product.img} title={reservedProduct.product.description} alt={reservedProduct.product} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md mb-4" />
                                <p className="text-lg font-semibold mb-2">{`Reserved Product ${reservedProduct.product}`}</p>
                                <p><strong>Contact Info:</strong> {reservedProduct.contactInfo}</p>
                                <p><strong>Fitting Room:</strong> {reservedProduct.fittingRoom}</p>
                                <p><strong>Pick Up Time:</strong> {reservedProduct.pickUpTime}</p>
                                <p><strong>Pick Up Time:</strong> {reservedProduct.img}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}