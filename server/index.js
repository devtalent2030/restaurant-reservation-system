// Import required modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection established"))
  .catch(err => console.log("MongoDB connection error:", err));

// Import reservation routes
const reservationRoutes = require('./routes/reservationRoutes');
app.use('/reservations', reservationRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server only if not in test mode
let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app; // Export the app instance for tests
