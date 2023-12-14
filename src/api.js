// api.js
export const BASE_URL = 'https://cazoravintage.azurewebsites.net/'; // vores backend URL

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

// api/products.js

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Returnerer data efter sletning
        } else {
            throw new Error('Fejl ved sletning af produkt.');
        }
    } catch (error) {
        console.error('Noget gik galt. Prøv igen', error);
        throw error;
    }
};

export const getProductsInCategory = async (categoryId) => {
    try {
        const response = await fetch(`${BASE_URL}/productCategories/products-in-category/${categoryId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fejl ved indlæsning af produkter i kategori: ', error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Returnerer data efter oprettelse
        } else {
            throw new Error('Fejl ved oprettelse af produkt.');
        }
    } catch (error) {
        console.error('Noget gik galt. Prøv igen', error);
        throw error;
    }
};

export const createReservation = async (reservationData) => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        if (response.ok) {
            const result = await response.json();
            return result
        }
        throw new Error('Fejl ved oprettelse af reservation.');

    } catch (error) {
        console.error('Fejl ved API-opkald: ', error);
        throw error;
    }
};

export const getReservations = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reservations`);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error('Fejl ved hentning af reservationer.');
    } catch (error) {
        console.error('Fejl ved API-opkald: ', error);
        throw error;
    }
};