import { useState } from 'react';
import { Navigate, navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import useAuth from '../../hooks/useAuth';
import { setAccessToken } from '../../utils/local-storage';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log(email, password);
      const res = await login({ email, password });
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      navigate('/datapersonal');

      toast.success('success login');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label className="block">
        <span className="block text-sm font-medium text-black ">Email</span>

        <input
          className="w-full px-3 py-2 rounded-md border border-slate-400"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          id="email"
        />
      </label>
      <br />
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            className="w-full px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </label>
        <input type="checkbox" name="remember" id="remember" />
        <label className="text-sm text-black font-light mr-2" for="remember">
          Remember me
        </label>
      </div>
      <br />
      <div>
        <button
          className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
  hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
          type="submit"
        >
          Sign In
        </button>
        <p className="text-right">
          <a
            className="text-blue-600 text-sm font-light hover:underline"
            href="https://www.google.com"
          >
            Forget Password?
          </a>
        </p>
      </div>
    </form>
  );
}
