import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // loader: rootLoader,
  },
  {
    path: '/posts/:numberId',
    element: <Post />,
  },
])

export default router
