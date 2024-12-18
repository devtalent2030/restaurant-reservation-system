const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Import app instance
const Reservation = require('../models/Reservation');

require('dotenv').config();

let server;

beforeAll(async () => {
    const testDbUri = process.env.MONGO_TEST_URI;

    // Connect to the test database if not already connected
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(testDbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    server = app.listen(3002); // Start the server on port 3002 for testing
});

afterAll(async () => {
    // Cleanup test database and close connections
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        await collections[key].deleteMany(); // Clear all documents in each collection
    }

    await mongoose.connection.close(); // Close database connection
    server.close(); // Close the test server
    console.log('Test database cleared and disconnected');
});

describe('Reservation API Tests', () => {
    test('POST /reservations creates a new reservation', async () => {
        const response = await request(server).post('/reservations').send({
            name: 'Test Reservation',
            reservationDate: '2024-01-01',
            reservationTime: '18:00',
            numberOfGuests: 4,
            contactNumber: '123456789',
            specialRequests: 'Test special request'
        });
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Test Reservation');
    });

    test('GET /reservations retrieves all reservations', async () => {
        const response = await request(server).get('/reservations');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test('GET /reservations/:id retrieves a single reservation', async () => {
        const newReservation = new Reservation({
            name: 'Single Fetch Test',
            reservationDate: '2024-01-02',
            reservationTime: '19:00',
            numberOfGuests: 2,
            contactNumber: '987654321',
            specialRequests: 'Window seat'
        });
        const savedReservation = await newReservation.save();

        const response = await request(server).get(`/reservations/${savedReservation._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Single Fetch Test');
    });

    test('PUT /reservations/:id updates a reservation', async () => {
        const reservation = new Reservation({
            name: 'Update Test',
            reservationDate: '2024-01-03',
            reservationTime: '20:00',
            numberOfGuests: 3,
            contactNumber: '000111222',
            specialRequests: 'No peanuts'
        });
        const savedReservation = await reservation.save();

        const updatedData = { name: 'Updated Reservation' };
        const response = await request(server)
            .put(`/reservations/${savedReservation._id}`)
            .send(updatedData);

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Updated Reservation');
    });

    test('DELETE /reservations/:id deletes a reservation', async () => {
        const reservation = new Reservation({
            name: 'Delete Test',
            reservationDate: '2024-01-04',
            reservationTime: '21:00',
            numberOfGuests: 1,
            contactNumber: '123123123',
            specialRequests: 'Near door'
        });
        const savedReservation = await reservation.save();

        const response = await request(server).delete(`/reservations/${savedReservation._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Reservation deleted successfully');
    });
});
