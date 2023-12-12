import { Link } from "react-router-dom";
import React from "react";

export default function AdminButtons(product){
    return (
        <div>
            <Link to={`/update/${product.id}`} className='object-contain m-3 p-2 w-20 rounded-md bg-cazora'>Redigér</Link>
            <Link to={`/delete/${product.id}`} className='object-contain m-3 p-2 w-20 rounded-md bg-cazora'>Slet</Link>          
        </div>
    )
}