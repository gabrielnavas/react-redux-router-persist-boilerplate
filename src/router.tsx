import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { LoginPage } from './pages/public/login'
import { CounterPage } from './pages/private/counter'

const router = createBrowserRouter([{
  path: '/',
  element: <LoginPage />
}, {
  path: '/counter',
  element: <CounterPage />
}])

export const Router = () => <RouterProvider router={router} />