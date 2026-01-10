import React from 'react'
import Landing from "./page/Landing"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router= createBrowserRouter([
  {path:"/", element:<Landing/>}
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
