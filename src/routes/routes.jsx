import { useRoutes } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Modal from "../components/Modal";
import Product from "../components/Product";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Category from "../components/Category";

const defaultRoutes = [
  {
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          { index: true, element: <Category /> },
          { path: "category/:category", element: <Category /> },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

const productRoutes = [
  {
    element: <Modal />,
    path: "/shop",
    children: [
      { index: true, path: "product/:product", element: <Product /> },
      { path: "category/:category/product/:product", element: <Product /> },
    ],
  },
];

const DefaultRoutes = ({ location }) => {
  const routes = useRoutes(defaultRoutes, location);
  return routes;
};

const ProductRoutes = () => {
  const routes = useRoutes(productRoutes);
  return routes;
};

export { DefaultRoutes as default, ProductRoutes };
