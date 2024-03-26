import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';

import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Pages from './Component/Pages/Pages';
import ErrorPage from './Component/EerrPage/ErrorPage';
import BookDetails from './Component/BookDetails/BookDetails';








const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,


    children: [

      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        element: <Pages></Pages>,
        loader: () => fetch(('fake.json'))
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('fake.json')
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
