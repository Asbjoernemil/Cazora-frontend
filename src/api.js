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

export const getOneParticularProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fejl ved indlæsning af produkter: ', error);
        throw error;
    }
};

// 
export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Returnerer data efter opdatering
        } else {
            throw new Error('Fejl ved opdatering af produkt.');
        }
    } catch (error) {
        console.log("Noget gik galt. Prøv igen");
        throw error;
    }
};