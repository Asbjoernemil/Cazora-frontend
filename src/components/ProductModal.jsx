// ProductModal.jsx
import React, { useEffect, useState } from 'react';
import { getOneParticularProduct } from '../api';

export default function ProductModal({ isOpen, onClose, productId }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Sikre, at productId er defineret
                if (productId) {
                    const productData = await getOneParticularProduct(productId);
                    setProduct(productData);
                }
            } catch (error) {
                console.error('Fejl ved indlæsning af produkt detaljer: ', error);
            }
        };

        if (isOpen) {
            fetchProductDetails();
        }
    }, [isOpen, productId]); // Sørg for at productId er inkluderet i afhængighedslisten

    if (!isOpen || !product) {
        return null;
    }

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price} DKK</p>
                <p>Size: {product.size}</p>
                <p>Categories: {product.categories}</p>
                <img src={product.img} alt={product.name} className="object-scale-down h-64 w-96 bg-purple-200 rounded-t-md" />
            </div>
        </div>
    );
}
