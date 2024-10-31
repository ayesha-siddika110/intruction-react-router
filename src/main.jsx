/* eslint-disable no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './componants/home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import About from './componants/about/About.jsx';
import Contact from './componants/contact/Contact.jsx';
import Users from './componants/users/users.jsx';
import UserIdData from './componants/users/UserIdData.jsx';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  // {
  //   path: "/about",
  //   element: <div>Hello world about!</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <div>contact area</div>,
  // },
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/users/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserIdData></UserIdData>
      },
    ]
  },
  

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
