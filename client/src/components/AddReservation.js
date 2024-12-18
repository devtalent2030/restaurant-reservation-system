import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';

function AddReservation() {
    const [formData, setFormData] = useState({
        name: '',
        reservationDate: '',
        reservationTime: '',
        numberOfGuests: '',
        contactNumber: '',
        specialRequests: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.reservationDate) newErrors.reservationDate = "Date is required";
        if (!formData.reservationTime) newErrors.reservationTime = "Time is required";
        if (formData.numberOfGuests <= 0) newErrors.numberOfGuests = "Number of guests must be at least 1";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            await axios.post('/reservations', formData);
            navigate('/');
        } catch (error) {
            console.error("Error adding reservation:", error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
            <Typography variant="h4" mb={2}>Add Reservation</Typography>
            <TextField 
                name="name" label="Name" fullWidth margin="normal" value={formData.name} onChange={handleChange} 
                error={!!errors.name} helperText={errors.name}
            />
            <TextField 
                name="reservationDate" label="Date" type="date" fullWidth margin="normal" value={formData.reservationDate} 
                onChange={handleChange} error={!!errors.reservationDate} helperText={errors.reservationDate} InputLabelProps={{ shrink: true }}
            />
            <TextField 
                name="reservationTime" label="Time" type="time" fullWidth margin="normal" value={formData.reservationTime} 
                onChange={handleChange} error={!!errors.reservationTime} helperText={errors.reservationTime} InputLabelProps={{ shrink: true }}
            />
            <TextField 
                name="numberOfGuests" label="Number of Guests" type="number" fullWidth margin="normal" value={formData.numberOfGuests}
                onChange={handleChange} error={!!errors.numberOfGuests} helperText={errors.numberOfGuests}
            />
            <TextField 
                name="contactNumber" label="Contact Number" fullWidth margin="normal" value={formData.contactNumber} 
                onChange={handleChange} error={!!errors.contactNumber} helperText={errors.contactNumber}
            />
            <TextField 
                name="specialRequests" label="Special Requests" fullWidth margin="normal" value={formData.specialRequests} onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Add</Button>
        </Box>
    );
}

export default AddReservation;
