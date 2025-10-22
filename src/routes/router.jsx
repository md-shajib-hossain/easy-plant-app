import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import ErrorGlobal from "../Error/ErrorGlobal";
import Registration from "../components/Registration";
import LogIn from "../components/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/plants/:id",
        Component: Plants,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/login",
        Component: LogIn,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorGlobal></ErrorGlobal>,
  },
]);
export default router;
