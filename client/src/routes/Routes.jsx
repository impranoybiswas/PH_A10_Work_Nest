import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import MyTasks from "../pages/MyTasks";
import AddTasks from "../pages/AddTasks";
import PrivateRoute from "./PrivateRoute";
import BrowseTasks from "../pages/BrowseTasks";
import UpdateTasks from "../pages/UpdateTask";
import TaskDetails from "../pages/TaskDetails";
import Profile from "../pages/Profile";
import Loading from "../components/Loading";
import UserProfile from "../pages/UserProfile";
import Terms from "../pages/Tarms";
import ForgetPass from "../pages/ForgetPass";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardCard from "../pages/dashboard/DashboardCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () =>
          await fetch(`${import.meta.env.VITE_SERVER_URL}/tasks`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/browse-tasks",
        Component: BrowseTasks,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/join-us",
        Component: Register,
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_URL}/task/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-task/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_URL}/task/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <UpdateTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <DashboardCard />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/add-task",
            element: (
              <PrivateRoute>
                <AddTasks />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/my-tasks",
            element: (
              <PrivateRoute>
                <MyTasks />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/update-task/:id",
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_SERVER_URL}/task/${params.id}`),
            hydrateFallbackElement: <Loading />,
            element: (
              <PrivateRoute>
                <UpdateTasks />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/user/:email",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_URL}/user/${params.email}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/forget-password",
        Component: ForgetPass,
      },
      {
        path: "/about-us",
        Component: About,
      },
    ],
  },
]);
