import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import DataPersonalPage from '../pages/DataPersonalPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import MenuBar from '../components/MenuBar';
import ProductsPage from '../pages/ProductsPage';
import ProfilePage from '../pages/ProfilePage';
import CartsPage from '../pages/CartsPage';
import PaymentPage from '../pages/PaymentPage';
import CleanserPage from '../pages/Products/CleanserPage';
import CartsAdminPage from '../pages/CartsAdminPage';
import RedirectIfAuthenticate from '../features/Auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/Auth/ProtectedRoute';
import SlipPage from '../pages/SlipPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  // {
  // element: (
  //   <ProtectedRoute>
  //     <AuthLayout />
  //   </ProtectedRoute>
  // ),
  // children: [

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
    path: '/menubar',
    element: <MenuBar />,
  },

  {
    path: '/productspage',
    element: <ProductsPage />,
  },
  {
    path: '/cleanser',
    element: <CleanserPage />,
  },

  {
    path: '/profilepage',
    element: <ProfilePage />,
  },
  {
    path: '/cartspage',
    element: <CartsPage />,
  },

  {
    path: '/paymentpage',
    element: <PaymentPage />,
  },

  {
    path: '/cartadminpage',
    element: <CartsAdminPage />,
  },
  {
    path: '/paymentpage',
    element: <PaymentPage />,
  },
  {
    path: '/slippage',
    element: <SlipPage />,
  },
  // ]
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
