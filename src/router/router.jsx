import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/UserPage/Home";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import About from "../pages/UserPage/About";
import SignUp from "../pages/authentication/SignUp";
import Invoices from "../pages/Dashboard/Invoices";
import Review from "../pages/Dashboard/Review";
import Setting from "../pages/Dashboard/Setting";

const router = createBrowserRouter([
  {
    path: "",
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
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index:true,
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      {
        path: "/dashboard/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
