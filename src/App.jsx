import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./styles/App.css";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
