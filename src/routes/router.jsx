import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import MyProfile from "../pages/MyProfile";
import ErrorGlobal from "../Error/ErrorGlobal";
import Registration from "../components/Registration";
import LogIn from "../components/LogIn";
import UpdateProfile from "../pages/UpdateProfile";
import PlantsDetails from "../pages/PlantsDetails";
import AllPlants from "../pages/AllPlants";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../components/About";
import Contact from "../components/Contact";

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
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/plantsdetails/:id",
        element: (
          <PrivateRoute>
            <PlantsDetails></PlantsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/allplants",
        Component: AllPlants,
      },
    ],
  },
  {
    path: "about",
    Component: About,
  },
  {
    path: "contact",
    Component: Contact,
  },

  {
    path: "*",
    element: <ErrorGlobal></ErrorGlobal>,
  },
]);
export default router;
