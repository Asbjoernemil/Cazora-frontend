import React, { useState, useEffect } from 'react';
import { getCategories, getProducts, getProductsInCategory } from '../api'; // Opdater dette med de faktiske API-funktioner

export default function Filter({ onCategoryChange }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Fejl ved indlæsning af kategorier: ', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = async (categoryId) => {
        try {
            setSelectedCategory(categoryId);

            if (categoryId) {
                // Hvis en kategori er valgt, filtrer produkterne baseret på kategorien
                const productsData = await getProductsInCategory(categoryId);
                onCategoryChange(productsData);
            } else {
                const allProductsData = await getProducts();
                onCategoryChange(allProductsData);
            }
        } catch (error) {
            console.error('Fejl ved filtrering af produkter: ', error);
        }
    };

    return (
        <div>
            <label htmlFor="category">Vælg kategori:</label>
            <select id="category" value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="">Alle kategorier</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
