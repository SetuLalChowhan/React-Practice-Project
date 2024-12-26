import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/UserPage/Home";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import About from "../pages/UserPage/About";
import SignUp from "../pages/authentication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/my-dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/my-dashboard",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
