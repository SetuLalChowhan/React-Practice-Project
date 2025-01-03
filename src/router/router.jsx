import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/UserPage/Home";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import About from "../pages/UserPage/About";
import SignUp from "../pages/authentication/SignUp";
import Review from "../pages/Dashboard/Review";
import Setting from "../pages/Dashboard/Setting";
import ProfileChange from "@/pages/Dashboard/ProfileChange";
import ProfileOverview from "@/pages/Dashboard/ProfileOverview";
import AllProducts from "@/pages/Dashboard/AllProducts";
import SubProducts from "@/pages/Dashboard/SubProducts";
import TestB from "@/pages/Dashboard/TestB";
import TestA from "@/pages/Dashboard/TestA";

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
        index: true,
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
      {
        path: "/dashboard/change_profile",
        element: <ProfileChange />,
      },
      {
        path: "/dashboard/change_overview",
        element: <ProfileOverview />,
      },
      {
        path: "/dashboard/all_products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/sub_products",
        element: <SubProducts />,
      },
      {
        path: "/dashboard/test/a",
        element: <TestA />,
      },
      {
        path: "/dashboard/test/b",
        element: <TestB />,
      },
    ],
  },
]);

export default router;
