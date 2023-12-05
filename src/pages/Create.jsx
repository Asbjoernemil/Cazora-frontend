import React, { useState } from "react"
import { BASE_URL } from "../api.js"
import { useNavigate } from 'react-router-dom';

export default function Create(){
    const [values, setValues] = useState({
        name: '',
        categories:[''],
        size: '',
        price: '',
        description: '',
        reserved: 0,
        img: ''
       
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => {
            console.log(response);
            navigate('/admin')
         })
        .catch(error => console.log(error)
        );
    }
   return(
    <div>
        <div>
            <form className="bg-rose-200" onSubmit={handleSubmit}>
                <h2>Tilføj tøj</h2>
                <div >
                    <label htmlFor="">Titel</label>
                    <input type="text" placeholder="Indtast navn eller titel" 
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className="">
                    <label htmlFor="">Størrelse</label>
                    <input type="text" placeholder="one size/s/m/l/34...49" 
                    onChange={e => setValues({...values, size: e.target.value})}/>
                </div>
                 <div className="">
                    <label htmlFor="">Pris</label>
                    <input type="number" placeholder="Indtast pris" 
                    onChange={e => setValues({...values, price: e.target.value})}/>
                </div>
                 <div className="">
                    <label htmlFor="">Beskrivelse</label>
                    <input type="text" placeholder="max 1024 tegn" 
                    onChange={e => setValues({...values, description: e.target.value})}/>
                </div>
                 <div className="">
                    <label htmlFor="">Foto</label>
                    <input type="text" placeholder="foto URL" 
                    onChange={e => setValues({...values, img: e.target.value})}/>
                </div>
                  <div className="">
                    <label htmlFor="">Kategorier</label>
                    <input type="text" placeholder="Vælg kategorier" 
                    onChange={e => setValues({...values, categories: e.target.value})}/>
                </div>
                <button className="bg-green-400">Indsend</button>
            </form>
        </div>
    </div>
   ) 
}