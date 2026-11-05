import { useState } from 'react'
import { RouterProvider } from 'react-router'
import {router} from './app.routes.jsx'
function App() {
  return (
    <>
      {/**
      RouterProvider connects your router to the React app. It renders the route that matches the current URL and enables navigation between routes.
       */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
