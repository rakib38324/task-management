import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import MainLayout from './Layout/MainLayout';
import Login from './Pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Register from './Pages/Register/Register';
import DashBoardLayout from './Layout/DashBoardLayout';
import PrivateRoute from './Routes/PrivateRoute';
import AddTask from './Pages/DashBoard/AddTask/AddTask';
import DashBoardHome from './Pages/DashBoard/DashBoardHome/DashBoardHome';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import AllTasks from './Pages/DashBoard/AllTasks/AllTasks';
import EditTask from './Pages/DashBoard/EditTask/EditTask';
import DashBoardOverview from './Pages/DashBoard/DashBoardHome/DashBoardOverView/DashBoardOverview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'about',
        element: <AboutUs></AboutUs>
      },
      {
        path:'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
          {
            path: 'addTask',
            element: <AddTask></AddTask>
          },
          {
            path: 'home',
            element: <DashBoardHome></DashBoardHome>
          },
          {
            path: 'allTasks',
            element: <AllTasks></AllTasks>
          },
          {
            path: 'overview',
            element: <DashBoardOverview></DashBoardOverview>
          },
          {
            path: 'editTask/:id',
            element: <EditTask></EditTask>,
            loader: ({params}) => fetch(`https://task-management-server-side-zeta.vercel.app/tasks/${params.id}`)
          }
        ]
      }
    ],

  },
]);
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
