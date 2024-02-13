import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Root from "./Root";
import BrandProduct from "../Components/BrandProduct";
import Details from "../Components/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProducts/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "/detailsPage/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "/Signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brand/:brand_name",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tech/${params.brand_name}`),
      },
    ],
  },
]);

export default router;
