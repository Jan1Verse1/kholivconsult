import React from 'react';
import LandingPage from './pages/LandingPage.jsx'
import ContactPage from './pages/contactUs.jsx'
import AboutPage from './pages/aboutUs.jsx';
import PurposePage from './pages/OurPurpose.jsx';
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