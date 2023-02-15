import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import DataPersonalPage from '../pages/DataPersonalPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import MenuBar from '../components/MenuBar';
import ProductsPage from '../pages/ProductsPage';
import CartsPage from '../pages/CartsPage';
import PaymentPage from '../pages/PaymentPage';
import CleanserPage from '../pages/Products/CleanserPage';
import CartsAdminPage from '../pages/admin/CartsAdminPage';
import RedirectIfAuthenticate from '../features/Auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/Auth/ProtectedRoute';
import SlipPage from '../pages/SlipPage';
import AdminPage from '../pages/admin/AdminPage';
import SignupPage from '../pages/SignupPage';

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
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/userpage',
    element: <UserPage />,
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
  {
    path: '/adminpage',
    element: <AdminPage />,
  },
  // ]
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
