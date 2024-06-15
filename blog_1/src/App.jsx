import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Index from './pages/index.jsx';
import Posts from './pages/posts.jsx';
import Layout from './layouts/layout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      }, {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
