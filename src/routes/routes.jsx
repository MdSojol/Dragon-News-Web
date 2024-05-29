import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Roots from "../layout/Roots";
import AboutPages from "../about/AboutPages";
import Middle from "../pages/Home/Middle";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path:  "/category/0",
            element: <Middle></Middle>
          }
        ]
      },
      {
        path: "/about",
        element: <AboutPages></AboutPages>
      },

    ]
  },
]);