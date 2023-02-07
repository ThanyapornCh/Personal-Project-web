import { ToastContainer } from 'react-toastify';
import Router from './routes/router';
import LoginPage from './pages/LoginPage';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-center" />
    </div>
  );
}
