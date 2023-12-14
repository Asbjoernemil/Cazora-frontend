import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOneParticularProduct, updateProduct } from "../api";

export default function Product() {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const product = await getOneParticularProduct(id);
                setProductData(product);
                setEditedProduct({ ...product[0] }); // Copy of product data for editing
            } catch (error) {
                console.error('Fejl ved indlæsning af produkt: ', error);
            }
        };

        fetchProductData();
    }, [id]);

    const handleChange = (e) => {
            const { name, value } = e.target;
            setEditedProduct((prevProduct) => ({
                ...prevProduct,
                [name]: value,
            }));
        };


    const handleSubmit = async () => {
        try {
            // Perform API call to update the product
            // Use editedProduct state to send updated data
            const response = await updateProduct(id, editedProduct);
            console.log('Opdateret produkt:', response);

            // Reset the state after updating
            setProductData(editedProduct);
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <div>
        {editedProduct ? (
            <div className="grid grid-cols-1 gap-2" >
                <h1 className="text-3xl font-semibold mb-4">Rediger {editedProduct.name}</h1>
                <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="text"
                    name="categories"
                    value={editedProduct.categories}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="text"
                    name="size"
                    value={editedProduct.size}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="text"
                    name="img"
                    value={editedProduct.img}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="checkbox"
                    name="reserved"
                    checked={editedProduct.reserved}
                    onChange={handleChange}
                    className="appearance-none border rounded w-4 h-4 border-gray-300 checked:bg-rose-200"
                />
                <textarea
                    name="description"
                    value={editedProduct.description}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
                <button onClick={handleSubmit} className="bg-cazora hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Gem ændringer</button>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
)
}
