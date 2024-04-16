import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './pages/home';
import Acomodação from './pages/acomodação';
import Login from './pages/user/login';
import Register from './pages/user/register';


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

      {
        path: "conta/iniciar-sessao",
        element: <Login />
      },

      {
        path: "conta/cadastra-se",
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
