import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import Root from "./pages/routes/root";
import ErrorPage from "./pages/error-page";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/product",
          element: <ProductPage/>,
        },
        {
          path: "/about",
          element: <AboutPage/>,
        }
      ]
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
