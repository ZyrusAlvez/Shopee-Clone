import "./App.css";
import Home from "./pages/Home/Home.jsx";
import LogIn from "./pages/Log/LogIn.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ProductList from "./pages/Products/ProductList.jsx";
import Product from "./pages/Products/product.jsx";
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
    },
    {
      path: "/list",
      element: <ProductList />
    },
    {
      path: "/list/:id",
      element: <Product />
    }
  ]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}