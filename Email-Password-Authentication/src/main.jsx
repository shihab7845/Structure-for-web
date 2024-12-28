import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Roots/Root.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login.jsx'
import Registration from './Components/Registration/Registration.jsx'
import Home from './Components/Home/Home.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      }
      ,{
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
