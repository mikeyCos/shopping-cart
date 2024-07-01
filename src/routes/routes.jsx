import { useLocation, useRoutes } from "react-router-dom";
import loader from "./loader";
import BasicLayout from "../layouts/BasicLayout";
import Modal from "../components/Modal";
import Product from "../components/Product";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Category from "../components/Category";
import { Suspense } from "react";

const routes = [
  {
    element: <BasicLayout />,
    // element: (
    //   <Suspense fallback={<h1>LOADING...</h1>}>
    //     <BasicLayout />
    //   </Suspense>
    // ),
    errorElement: <ErrorPage />,
    id: "root",
    loader: loader,
    children: [
      {
        path: "/home?",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "category?/:category?",
            element: <Category />,
            children: [
              {
                path: "product/view/:product",
                element: null,
              },
            ],
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
