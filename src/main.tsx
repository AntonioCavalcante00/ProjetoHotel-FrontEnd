import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppAdmin from './AppAdmin';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './pages/home';
import Acomodação from './pages/acomodação';
import Pacote from './pages/pacote'


import Register from './pages/user/register';
import Login from './pages/user/login';

import Inicio from './pages/admin/inicio';
import Funcionario from './pages/admin/funcionario';
import Quartos from './pages/admin/quartos';

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
        path: "/pacotes",
        element: <Pacote />
      },

    ],
  },

  {
    element: <AppAdmin />,
    children: [
      {
        path: "/conta/dashboard",
      },

      {
        path: "/conta/dashboard/",
        element: <Inicio />
      },

      {
        path: "/conta/dashboard/funcionarios",
        element: <Funcionario />
      },

      {
        path: "/conta/dashboard/quartos",
        element: <Quartos />
      },

    ]

  },


  {
    path: '/conta/cadastra-se',
    element: <Register />
  },

  {
    path: '/conta/iniciar-sessao',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
