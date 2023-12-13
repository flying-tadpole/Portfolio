import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import App from './App.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import About from './pages/About/About.jsx'
import Resume from './pages/Resume/Resume.jsx'
import Contact from './pages/Contact/Contact.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "/Portfolio",
        element: <Portfolio />
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
