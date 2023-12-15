import React, { useState } from "react";
import { createProduct } from "../api";
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [values, setValues] = useState({
        name: '',
        categories: [''],
        size: '',
        price: '',
        description: '',
        reserved: 0,
        img: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        try {
            // Kald den nye createProduct-funktion
            const response = await createProduct(values);

            // Håndter succes
            console.log(response);
            navigate('/admin');
        } catch (error) {
            // Håndter fejl
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Tilføj tøj</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Titel</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Indtast navn eller titel"
                        onChange={e => setValues({ ...values, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">Størrelse</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="one size/s/m/l/34...49"
                        onChange={e => setValues({ ...values, size: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Pris</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Indtast pris"
                        onChange={e => setValues({ ...values, price: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Beskrivelse</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="max 1024 tegn"
                        onChange={e => setValues({ ...values, description: e.target.value })}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">Foto</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="foto URL"
                        onChange={e => setValues({ ...values, img: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">Kategorier</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Vælg kategorier"
                        onChange={e => setValues({ ...values, categories: e.target.value })}
                        required
                    />
                </div>
                <button
                    className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Indsend
                </button>
            </form>
        </div>
    )
}