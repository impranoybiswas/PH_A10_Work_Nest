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
          await fetch("https://work-nest-server-azure.vercel.app/tasks"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/browse-tasks",
        Component: BrowseTasks,
        loader: async () =>
          await fetch("https://work-nest-server-azure.vercel.app/tasks"),
        hydrateFallbackElement: <Loading />,
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
          fetch(`https://work-nest-server-azure.vercel.app/task/${params.id}`),
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
          fetch(`https://work-nest-server-azure.vercel.app/task/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <UpdateTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/:email",
        loader: ({ params }) =>
          fetch(
            `https://work-nest-server-azure.vercel.app/user/${params.email}`
          ),
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
      }
    ],
  },
]);
