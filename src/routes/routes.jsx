import loader from "./loader";
import BasicLayout from "../layouts/BasicLayout";
import Product from "../components/Product";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Category from "../components/Category";
// import { Suspense } from "react";

const routes = [
  {
    // element: (
    //   <Suspense fallback={<h1>LOADING...</h1>}>
    //     <BasicLayout />
    //   </Suspense>
    // ),
    element: <BasicLayout />,
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
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <Category />,
            children: [
              {
                path: "product/view/modal/:product",
                element: null,
              },
            ],
          },
          {
            path: "category/:category?",
            element: <Category />,
            children: [
              {
                path: "product/view/modal/:product",
                element: null,
              },
            ],
          },
          {
            path: "product/view/:product",
            element: <Product />,
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
