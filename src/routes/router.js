import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import DataPersonalPage from '../pages/DataPersonalPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import CategoriesPage from '../components/CategoriesPage';
import ProductsPage from '../pages/ProductsPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },

  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/datapersonal',
    element: <DataPersonalPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/userpage',
    element: <UserPage />,
  },

  {
    path: '/categoriespage',
    element: <CategoriesPage />,
  },

  {
    path: '/productspage',
    element: <ProductsPage />,
  },
  {
    path: '/profilepage',
    element: <ProfilePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
