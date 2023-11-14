import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      // errorElement: <ErrorComponent />,
    },
    {
      // path: 'InsertNameHere/:name',
      // element: <InsertNameHereComponent />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
