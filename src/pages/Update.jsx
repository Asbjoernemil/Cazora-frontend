import React, { useEffect, useState } from "react"
import { BASE_URL } from "../api";
import { Link } from "react-router-dom";

export default function Update() {
    const { id } = 1
    const [values, setValues] = useState({
        name: '',
        categories: '',
        size: '',
        price: '',
        description: '',
        reserved: false,
        img: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            
            if (response.ok) {
                history.push('/admin'); // Gå til /admin, hvis opdateringen lykkes
            } else {
                throw new Error('Fejl ved opdatering af produkt');
            }
        } catch (error) {
            console.error('Fejl ved opdatering af produkt: ', error);
            // Håndter fejl, f.eks. vis en fejlmeddelelse til brugeren
        }
    };

     const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };




    const [sizes, setSizes] = useState([]);

    useEffect(() => {
    //  GET-request for backend
    fetch('http://localhost:3000/sizes')
      .then(response => response.json())
      .then(sizes => {
        setSizes(sizes); // Opdater state med størrelser fra backend
      })
      .catch(error => console.error('Fejl:', error));
  }, []);
    return (
        <div>
            <h2>Redigér detaljer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <li>
                    <label htmlFor="name">Titel</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} />
                    </li>
                    <li>
                    <label htmlFor="categories">Kategorier</label>
                    <input type="text" name="categories" value={values.categories} onChange={handleChange} />
                    </li>
                    <li>
                    <label htmlFor="size">Størrelse</label>
                         <select>
                        {sizes.map(size => (
                            <option key={size.id} value={size.name}>
                            {size.name}
                            </option>
                            ))}
                         </select>
                    </li>
                    <li>
                    <label htmlFor="name">Pris</label>
                    <input type="text" name="price" value={values.price} onChange={handleChange} />
                    </li>
                    <li>
                    <label htmlFor="description">Beskrivelse</label>
                    <input type="text" name="description" value={values.description} onChange={handleChange} />
                    </li>
                    <li>
                    <label htmlFor="reserved">Reserveret</label>
                    <input type="hidden" name="reserved" value={values.reserved} onChange={handleChange} />
                    </li>
                    <li>
                    <label htmlFor="img">Billede URL</label>
                    <input type="text" name="img" value={values.img} onChange={handleChange} />
                    </li>
                </div> 
                <button type="submit">Indsend</button>
            </form>
            <Link to="/admin">Tilbage</Link>
        </div>
    );
}