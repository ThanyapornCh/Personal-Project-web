import { ToastContainer } from 'react-toastify';
import Router from './routes/router';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div>
      <Router />
      <ToastContainer autoClose="1000" theme="light" position="bottom-center" />
    </div>
  );
}
