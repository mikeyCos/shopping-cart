import BasicLayout from "../layouts/BasicLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Placeholder_00 from "../components/Placeholder_00";
import Placeholder_01 from "../components/Placeholder_01";

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
        path: "/placeholder_00",
        element: <Placeholder_00 />,
      },
      {
        path: "/placeholder_01",
        element: <Placeholder_01 />,
      },
    ],
  },
];

export default routes;
