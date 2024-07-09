import "./App.css";
import Home from "./pages/Home/Home.jsx";
import LogIn from "./pages/Log/LogIn.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/log',
      element: <LogIn />
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}