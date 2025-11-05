import React from 'react';
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/contactUs'
import AboutPage from './pages/aboutUs';
import PurposePage from './pages/purpose';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css'

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/contact-us",
      element: <ContactPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/purpose",
      element: <PurposePage />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;