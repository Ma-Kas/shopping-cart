import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../pages/App/App';
import Home from '../pages/Home/Home';
import Store from '../pages/Store/Store';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'store', element: <Store /> },
        { path: 'about', element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
