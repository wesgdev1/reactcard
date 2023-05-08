import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles.js'
import VehicleViews from './views/VehicleViews.jsx'



const routes=[

  {
    path:'/',
    element:<App/>

  }
];

vehicles.forEach(v=>{

  routes.push({
    path:v.name,
    element:<VehicleViews vehicle={v}/>
    
  
  });
  console.log(v.name);
})

const router= createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
