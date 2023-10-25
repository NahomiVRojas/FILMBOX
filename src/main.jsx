import React from 'react'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../src/views/Login/Login.jsx'
import '../src/index.css';
import Join from '../src/views/Join/Join.jsx';
import Home from '../src/views/Home/Home.jsx';
import Movies from '../src/views/Movies/Movies.jsx';
import Shows from '../src/views/Shows/Shows.jsx'
import TopMovies from '../src/views/Top Rated/TopRated.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/shows",
    element: <Shows />,
  },
  {
    path: "/top",
    element: <TopMovies />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
