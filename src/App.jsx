import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import HomeWrapper from "./Wrappers/HomeWrapper";
import Register from "./Components/Register";
import Login from "./Components/Login";
import DashboardWrapper from "./Wrappers/DashboardWrapper";
import userLoaders from "./loaders/userLoaders";
import ProtectedRoute from "./Routes/ProtectedRoute";
import LoginRoute from "./Routes/LoginRoute";
import AdminDashboardWrapper from "./Wrappers/AdminDashboardWrapper";
import CreateProduct from "./Components/CreateProduct";
import AdminRoute from "./Routes/AdminRoute";
import ViewProducts from "./Components/ViewProducts";
import productLoaders from "./loaders/productLoaders";
import ViewOrders from "./Components/ViewOrders";
import orderLoaders from "./loaders/orderLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <HomeWrapper />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "register",
            element: <Register />
          },
          {
            path: "login",
            element: <Login />
          }
        ]
      }
    ]
  },
  {
    path: "dashboard",
    element: <ProtectedRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        loader: userLoaders.getUser,
        children: [
          {
            path: "products",
            element: <ViewProducts />,
            loader: productLoaders.viewProducts
          }
        ]
      }
    ]
  },
  {
    path: "admin",
    element: <ProtectedRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <AdminRoute />,
        loader: userLoaders.getUser,
        children: [
          {
            path: "",
            element: <AdminDashboardWrapper />,
            loader: userLoaders.getUser,
            children: [
              {
                path: "products",
                element: <CreateProduct />
              },
              {
                path: "orders",
                element: <ViewOrders />,
                loader: orderLoaders.ViewOrders,
              }
            ]
          }
        ]
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;