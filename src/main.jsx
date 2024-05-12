import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import desarrolladores from './datos/desarrolladores.js'

//importamos router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//importar lenguajes vistas
import DesarrolladorVista from './vistas/DesarrolladorVista.jsx'



const router = [
  {
    path: "/",
    element: <App />,
  }, 
];

desarrolladores.forEach((len) =>{
  router.push({
    path: len.ntitulo,
    element: <DesarrolladorVista len = {len} />,


  });
});

const routes = createBrowserRouter(router)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={routes} />
  </React.StrictMode>,
)
