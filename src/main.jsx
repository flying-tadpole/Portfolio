import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import App from './App.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: "/Me",
        element: <About />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
