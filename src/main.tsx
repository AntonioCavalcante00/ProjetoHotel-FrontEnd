import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './pages/home';
import Acomodação from './pages/acomodação';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/acomodacao",
        element: <Acomodação />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
