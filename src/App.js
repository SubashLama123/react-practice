

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './ui/RootLayout';
import Main from './dashboard/Main';
import Login from './features/auth/Login';
import Signup from './features/auth/SignUp';

const App = () => {
  const router = createBrowserRouter([ // Changed 'Router' to 'router' to match the usage below
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'login',
          element: <Login />
        },

        {
          path: 'signup',
          element: <Signup />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />; // Ensured 'router' is consistent
};

export default App;
