const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation'); 

// POST a new reservation
router.post('/', async (req, res) => {
    const reservation = new Reservation({
        name: req.body.name,
        reservationDate: req.body.reservationDate,
        reservationTime: req.body.reservationTime,
        numberOfGuests: req.body.numberOfGuests,
        contactNumber: req.body.contactNumber,
        specialRequests: req.body.specialRequests
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single reservation by ID
router.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (reservation) {
            res.json(reservation);
        } else {
            res.status(404).json({ message: 'Reservation not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a reservation by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedReservation) {
            res.json(updatedReservation);
        } else {
            res.status(404).json({ message: 'Reservation not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a reservation by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
        if (deletedReservation) {
            res.json({ message: 'Reservation deleted successfully' });
        } else {
            res.status(404).json({ message: 'Reservation not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
