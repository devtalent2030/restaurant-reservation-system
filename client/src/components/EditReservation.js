import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// Material-UI Components
import {
    Container,
    TextField,
    Typography,
    Button,
    Box,
    Alert
} from '@mui/material';
import { Edit } from '@mui/icons-material';

function EditReservation() {
    const [formData, setFormData] = useState({
        name: '',
        reservationDate: '',
        reservationTime: '',
        numberOfGuests: '',
        contactNumber: '',
        specialRequests: ''
    });
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState(''); // General error for API issues
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch the reservation to prefill the form
    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const response = await axios.get(`/reservations/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching reservation:', error);
                setGeneralError("Error fetching reservation details. Please try again.");
            }
        };
        fetchReservation();
    }, [id]);

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.reservationDate) newErrors.reservationDate = "Reservation date is required";
        if (!formData.reservationTime) newErrors.reservationTime = "Reservation time is required";
        if (formData.numberOfGuests <= 0) newErrors.numberOfGuests = "Number of guests must be at least 1";
        if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            await axios.put(`/reservations/${id}`, formData);
            navigate('/'); // Redirect back to reservation list
        } catch (error) {
            console.error('Error updating reservation:', error);
            setGeneralError("Failed to update reservation. Please try again.");
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" gutterBottom align="center">
                Edit Reservation
            </Typography>

            {/* General Error Alert */}
            {generalError && (
                <Alert severity="error" style={{ marginBottom: '1rem' }}>
                    {generalError}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: 3,
                }}
            >
                {/* Name Input */}
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name}
                />

                {/* Reservation Date */}
                <TextField
                    label="Reservation Date"
                    name="reservationDate"
                    type="date"
                    value={formData.reservationDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    fullWidth
                    error={!!errors.reservationDate}
                    helperText={errors.reservationDate}
                />

                {/* Reservation Time */}
                <TextField
                    label="Reservation Time"
                    name="reservationTime"
                    type="time"
                    value={formData.reservationTime}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    fullWidth
                    error={!!errors.reservationTime}
                    helperText={errors.reservationTime}
                />

                {/* Number of Guests */}
                <TextField
                    label="Number of Guests"
                    name="numberOfGuests"
                    type="number"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    fullWidth
                    error={!!errors.numberOfGuests}
                    helperText={errors.numberOfGuests}
                />

                {/* Contact Number */}
                <TextField
                    label="Contact Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    fullWidth
                    error={!!errors.contactNumber}
                    helperText={errors.contactNumber}
                />

                {/* Special Requests */}
                <TextField
                    label="Special Requests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                    fullWidth
                >
                    Update Reservation
                </Button>
            </Box>
        </Container>
    );
}

export default EditReservation;
