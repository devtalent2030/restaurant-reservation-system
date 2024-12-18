const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Customer name is required'],
        trim: true
    },
    reservationDate: {
        type: Date,
        required: [true, 'Reservation date is required']
    },
    reservationTime: {
        type: String,
        required: [true, 'Reservation time is required']
    },
    numberOfGuests: {
        type: Number,
        required: [true, 'Number of guests is required']
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required']
    },
    specialRequests: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
