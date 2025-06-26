import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import AllGroups from "../Pages/AllGroups/AllGroups";
import MyGroupes from "../Pages/MyGroupes/MyGroupes";
import MyProfile from "../Pages/MyProfile/MyProfile";
import GroupDetails from "../Components/GroupDetails/GroupDetails";
import UpdateGroupData from "../Components/UpdateGroupData/UpdateGroupData";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OverView from "../Pages/Dashboard/OverView/OverView";
import Users from "../Pages/Dashboard/Users/Users";
import MyGroupess from "../Pages/Dashboard/myGroupsss/MyGroupss";
import AllGroupssTable from "../Pages/Dashboard/AllGroupssTable/AllGroupssTable";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        index: true,
        loader: () => {
          return fetch("https://hobby-shop-server-side.vercel.app/groups");
        },
        Component: Home,
      },
      {
        path: "/creategroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/allgroups",
        Component: AllGroups,
      },
      {
        path: "/mygroups",
        element: (
          <PrivateRoute>
            <MyGroupes></MyGroupes>
          </PrivateRoute>
        ),
      },
      {
        path: "/groupDetails/:id",
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
        loader: () => {
          return fetch("https://hobby-shop-server-side.vercel.app/groups");
        },
      },
      {
        path: "/mygroups/update/:id",
        Component: UpdateGroupData,
        loader: ({ params }) => {
          return fetch(
            `https://hobby-shop-server-side.vercel.app/groups/${params.id}`
          );
        },
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            Component: OverView,
          },
          {
            path: "/dashboard/overview",
            Component: OverView,
          },
          {
            path: "/dashboard/users",
            Component: Users,
          },
          {
            path: "/dashboard/mygroups",
            Component: MyGroupess,
          },
          {
            path: "/dashboard/creategroup",
            Component: CreateGroup,
          },
          {
            path: "/dashboard/allgroups",
            Component: AllGroupssTable,
          }
        ],
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          {
            path: "/auth/register",
            Component: Register,
          },
          {
            path: "/auth/login",
            Component: Login,
          },
          
        ],
      },
    ],
  },
]);
