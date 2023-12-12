import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOneParticularProduct, updateProduct } from "../api";

export default function Product() {
    const { id } = useParams();
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const product = await getOneParticularProduct(id);
                setEditedProduct({ ...product[0] });
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
            // API call to update product
            const response = await updateProduct(id, editedProduct);
            console.log('Opdateret produkt:', response);

        } catch (error) {
            console.log(error);
            console.log();
        }
    };

    return (
        <div>
            {editedProduct ? (
                <div className="grid grid-cols-1 gap-2" >
                    <h1>Rediger {editedProduct.name}</h1>
                    <input
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="categories"
                        value={editedProduct.categories}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="size"
                        value={editedProduct.size}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="img"
                        value={editedProduct.img}
                        onChange={handleChange}
                    />
                    <input
                        type="checkbox"
                        name="reserved"
                        checked={editedProduct.reserved}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        value={editedProduct.description}
                        onChange={handleChange}
                    ></textarea>
                    <button onClick={handleSubmit}>Gem ændringer</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
