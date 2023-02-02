import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import DataPersonalPage from '../pages/DataPersonalPage';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },

  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/DataPersonal',
    element: <DataPersonalPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
