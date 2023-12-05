// api.js
export const BASE_URL = 'http://localhost:3000'; // vores backend URL

export const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
};

// api/products.js
export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fejl ved indlæsning af produkter: ', error);
        throw error; // kast fejlen videre for at lade komponenten håndtere den
    }
};

