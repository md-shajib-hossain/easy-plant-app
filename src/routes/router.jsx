import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import ErrorGlobal from "../Error/ErrorGlobal";

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
        path: "/plants",
        Component: Plants,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorGlobal,
  },
]);
export default router;
