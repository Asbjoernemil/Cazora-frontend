// Reservation.jsx
import { createReservation } from '../api';

export const reserveProduct = async (productId, fittingRoom, contactInfo, pickUpTime) => {
    try {

        const reservationData = {
            productId,
            fittingRoom,
            contactInfo,
            pickUpTime,
        };

        const result = await createReservation(reservationData);
        return result;
    } catch (error) {
        console.error('Fejl ved reservation: ', error);
        throw error;
    }
};
