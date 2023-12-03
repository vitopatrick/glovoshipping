import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TrackShipmentPage from "./pages/TrackShipmentPage";
import AddShipmentPage from "./pages/AddShipmentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/track-shipment",
    element: <TrackShipmentPage />,
  },
  {
    path: "/add",
    element: <AddShipmentPage />,
  },
]);
