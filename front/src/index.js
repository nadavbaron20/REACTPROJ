import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/setup.scss'
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from './contexts/AppContext.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { BusContextProvider } from './contexts/BusContext.jsx';
import { ToastContainer } from 'react-toastify';
import { FavoriteContext, FavoriteContextProvider } from './contexts/FavoriteContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div dir='rtl'>
        <BrowserRouter>
            <ToastContainer autoClose={1000} />
            <AuthContextProvider>
                <AppContextProvider>
                    <BusContextProvider>
                        <FavoriteContextProvider>
                            <App />
                        </FavoriteContextProvider>
                    </BusContextProvider>
                </AppContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </div>
);

