# Restaurant Reservation System  

This is a full-stack application for managing reservations in a restaurant. It includes a React frontend, an Express backend, and MongoDB for data persistence.

---

## **Features**  

- Add, Edit, and Delete reservations  
- View all reservations in a styled and user-friendly list  
- Responsive UI using Material-UI  
- Full test coverage for backend API routes using Jest and Supertest  

---

## **Technology Stack**  

- **Frontend**: React, Material-UI  
- **Backend**: Node.js, Express  
- **Database**: MongoDB Atlas  
- **Testing**: Jest, Supertest  

---

## **Setup Instructions**  

### Prerequisites  

- Node.js and npm installed  
- MongoDB Atlas account or local MongoDB setup  

---

### Backend Setup  

- 1. Clone the repository:  
   - git clone https://github.com/your-repo/restaurant-reservation-system.git
   - cd restaurant-reservation-system/server

- npm install

## Create a .env file

-MONGO_URI=<your_mongodb_connection_string>
-MONGO_TEST_URI=mongodb://127.0.0.1:27017/reservation_test_db
-PORT=3001
-NODE_ENV=development

## Start the backend server:

- npm start

# Frontend Setup
## Navigate to the client folder:

- cd ../client
- Install dependencies:


- npm install
- Start the React development server:

- npm start
- Open your browser at http://localhost:3000.

-API Endpoints
-Base URL: http://localhost:3001
-Endpoint	Method	Description
/reservations	GET	Fetch all reservations
/reservations/:id	GET	Fetch reservation by ID
/reservations	POST	Create a new reservation
/reservations/:id	PUT	Update a reservation by ID
/reservations/:id	DELETE	Delete a reservation by ID
-Running Tests
To test the backend API routes, run:


npm test

Tests are written using Jest and Supertest.