import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Material-UI Components
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
} from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';

function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('/reservations');
            setReservations(response.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    const deleteReservation = async (id) => {
        try {
            await axios.delete(`/reservations/${id}`);
            fetchReservations(); // Refresh the list
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h3" gutterBottom align="center">
                Reservations
            </Typography>

            {/* Add New Reservation Button */}
            <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
                <Link to="/add" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Add />}
                    >
                        Add New Reservation
                    </Button>
                </Link>
            </div>

            {/* List of Reservations */}
            <Grid container spacing={3}>
                {reservations.map((reservation) => (
                    <Grid item xs={12} sm={6} md={4} key={reservation._id}>
                        <Card style={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {reservation.name}
                                </Typography>
                                <Typography color="text.secondary">
                                    Date: {new Date(reservation.reservationDate).toLocaleDateString()}
                                </Typography>
                                <Typography color="text.secondary">
                                    Time: {reservation.reservationTime}
                                </Typography>
                                <Typography color="text.secondary">
                                    Guests: {reservation.numberOfGuests}
                                </Typography>
                                {reservation.specialRequests && (
                                    <Typography color="text.secondary">
                                        Special Requests: {reservation.specialRequests}
                                    </Typography>
                                )}
                            </CardContent>

                            {/* Action Buttons */}
                            <CardActions>
                                <Link to={`/edit/${reservation._id}`} style={{ textDecoration: 'none' }}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        startIcon={<Edit />}
                                        color="info"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    startIcon={<Delete />}
                                    color="error"
                                    onClick={() => deleteReservation(reservation._id)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* No Reservations */}
            {reservations.length === 0 && (
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    style={{ marginTop: '2rem' }}
                >
                    No reservations found. Add one to get started!
                </Typography>
            )}
        </Container>
    );
}

export default ReservationList;
