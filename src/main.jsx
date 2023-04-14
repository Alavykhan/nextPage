import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
{
path: '/',
element:<App></App>,
errorElement: <ErrorPage></ErrorPage>,
children:[
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/books',
    element:<Books></Books>,
    loader: ()=> fetch('https://api.itbook.store/1.0/new'),
  },
  {
    path:'book/:id',
    element:<BookDetails/>,
    loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
  }
]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
