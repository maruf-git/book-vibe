import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root';
import ErrorPage from './assets/components/ErrorPage';
import Home from './assets/components/Home';
import ListedBooks from './assets/components/ListedBooks';
import PagesToRead from './assets/components/PagesToRead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"pages-to-read",
        element:<PagesToRead></PagesToRead>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
