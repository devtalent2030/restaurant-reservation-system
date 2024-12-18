import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import './App.css'; // Ensure App.css contains the global styles
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define custom theme for Material-UI
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#ff9800', // Orange
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        button: {
            textTransform: 'capitalize', // Remove all caps from buttons
        },
    },
});

// React 18 Syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
