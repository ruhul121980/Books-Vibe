import React from 'react'
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBoooks/ListedBooks.jsx';
import PageToRead from './components/PageToRead/PageToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ReviewSubmissionForm from './components/ReviewSubmissionForm/ReviewSubmissionForm.jsx';
import DiscussionForum from './components/DiscussionForum/DiscussionForum.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch("data.json"),
        
      },
      {
        path:"/pageToRead",
        element:<PageToRead></PageToRead>,
        loader:()=>fetch('data.json')
      },
    
      
      
      {
        path:"/booksCard/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('data.json')
      },
      {
        path:'/review',
        element:<ReviewSubmissionForm></ReviewSubmissionForm>
      },
      {
        path:'/discussion',
        element:<DiscussionForum></DiscussionForum>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
