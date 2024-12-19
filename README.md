# Restaurant Reservation System

A full-stack web application for managing restaurant reservations. This solution is built using a React front end, Node.js/Express back end, and MongoDB for data persistence.

---

## Overview

**Restaurant Reservation System** allows users to easily create, view, edit, and delete reservations. The application features a responsive and visually appealing front end along with a robust, tested back end API.

**Screenshots**  
*Below are screenshots showcasing the key pages and features of the application.*  

#### **Homepage**  
![Homepage](./screenshots/Screenshot%202024-12-18%20at%2017.06.33.png "Homepage Screenshot")  

#### **Add Reservation Form**  
![Add Reservation Form](./screenshots/Screenshot%202024-12-18%20at%2017.08.03.png "Add Reservation Form Screenshot")  

#### **Reservation List**  
![Reservation List](./screenshots/Screenshot%202024-12-18%20at%2017.08.44.png "Reservation List Screenshot")  

#### **Edit Reservation**  
![Edit Reservation](./screenshots/Screenshot%202024-12-18%20at%2017.09.29.png "Edit Reservation Screenshot")  
---


## Key Features

- **Reservation Management:** Add new reservations, edit existing ones, and delete those no longer needed.
- **User-Friendly Interface:** Responsive UI built with Material-UI components.
- **Full Test Coverage:** Thorough back-end API testing with Jest and Supertest.
- **Scalable Architecture:** A structured approach that can easily be extended to other functionalities.

---

## Technology Stack

- **Frontend:** React, Material-UI  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (MongoDB Atlas or local)  
- **Testing:** Jest, Supertest

---

## Getting Started

### Prerequisites

- **Node.js & npm:** Ensure you have Node.js and npm installed.  
- **MongoDB:** Have a MongoDB Atlas account or a local MongoDB instance running.

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/restaurant-reservation-system.git
   cd restaurant-reservation-system/server
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**  
   Create a `.env` file in the `server` directory and add:
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   MONGO_TEST_URI=mongodb://127.0.0.1:27017/reservation_test_db
   PORT=3001
   NODE_ENV=development
   ```

4. **Start the Backend Server:**
   ```bash
   npm start
   ```

   The API should now be running at `http://localhost:3001`.

### Frontend Setup

1. **Navigate to the Client Directory:**
   ```bash
   cd ../client
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the React Development Server:**
   ```bash
   npm start
   ```
   
   Open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

| Endpoint          | Method | Description                      |
|-------------------|--------|----------------------------------|
| /reservations     | GET    | Fetch all reservations           |
| /reservations/:id | GET    | Fetch a reservation by ID        |
| /reservations     | POST   | Create a new reservation         |
| /reservations/:id | PUT    | Update an existing reservation   |
| /reservations/:id | DELETE | Delete a reservation by ID       |

---

## Running Tests

To run the backend tests:
```bash
cd server
npm test
```

Tests are implemented using **Jest** and **Supertest** for comprehensive API coverage.

---

## License

*(Include your preferred license here if applicable.)*

---

## Contributing

We welcome contributions! Please open issues and submit pull requests as needed.
