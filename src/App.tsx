import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import Root from "./pages/routes/root";
import ErrorPage from "./pages/error-page";
import { store } from "./store/store";
import { Provider } from "react-redux";
import FavoritePage from './pages/favorite'
import CheckoutPage from "./pages/checkout";

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
        },
        {
          path: "/favorite",
          element: <FavoritePage/>,
        },
        {
          path: "/checkout",
          element: <CheckoutPage/>,
        },
      ]
    },
    
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
