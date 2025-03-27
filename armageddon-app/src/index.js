import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { Asteroid } from './pages/Asteroid'
import { Destroyment } from './pages/Destroyment'
import { Asteroids } from './pages/Asteroids'
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext'

const router = createBrowserRouter([
    {
        path: '/asteroids',
        element: <Asteroids />,
    },
    {
        path: '/destroyment',
        element: <Destroyment />,
    },
    {
        path: '/asteroid/:id', //динамический маршрут
        element: <Asteroid />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AsteroidsContextProvider>
            <RouterProvider router={router} />
        </AsteroidsContextProvider>
    </React.StrictMode>
);
