import React from 'react';
import LandingPage from './pages/LandingPage.jsx'
import ContactPage from './pages/contactUs.jsx'
import AboutPage from './pages/aboutUs.jsx';
import PurposePage from './pages/Purpose.jsx';
import ControllershipPage from './pages/controller.jsx';
import BusinessStrategyPage from './pages/BusinessStrategy.jsx';
import CapitalRaisingPage from './pages/CapitalRaising.jsx';
import HRConsultingPage from './pages/HRConsulting.jsx';
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
    },
    {
      path: "/services/controllership-bookkeeping",
      element: <ControllershipPage />,
    },
    {
      path: "/services/business-strategy",
      element: <BusinessStrategyPage />,
    },
    {
      path: "/services/capital-raising",
      element: <CapitalRaisingPage />,
    },
    {
      path: "/services/hr-consulting",
      element: <HRConsultingPage />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;