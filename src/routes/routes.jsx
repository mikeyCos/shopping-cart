import BasicLayout from "../layouts/BasicLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Category from "../components/Category";

const routes = [
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

export default routes;
