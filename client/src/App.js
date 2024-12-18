import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationList from './components/ReservationList';
import AddReservation from './components/AddReservation';
import EditReservation from './components/EditReservation';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ReservationList />} />
                    <Route path="/add" element={<AddReservation />} />
                    <Route path="/edit/:id" element={<EditReservation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
