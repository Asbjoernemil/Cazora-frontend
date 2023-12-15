// Reservation.jsx
import { createReservation } from '../api';

export const reserveProduct = async (fittingRoom, productId, contactInfo, pickUpTime) => {
    try {

        const reservationData = {
            fittingRoom,
            productId,
            contactInfo,
            pickUpTime
        };

        const result = await createReservation(reservationData);
        console.log(reservationData);
        return result;
    } catch (error) {
        console.error('Fejl ved reservation: ', error);
        throw error;
    }
};
