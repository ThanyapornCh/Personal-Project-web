import axios from 'axios';
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import input from '../../components/Input';
import validateRegister from '../../validators/validate-register';
import * as authApi from '../../apis/auth-api';
// import useLoading from '../../hooks/useLoading';

const initialInput = {
  userName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError({ ...error, ...result });
      } else {
        setError(initialInput);
        await authApi.register(input);
        setInput(initialInput);
        onClose();
      }
    } catch (err) {}
    toast.success('success register, please log in to continue.');
    console.log(input);

    navigate('/login');
    // startLoading();
    // await authApi.register(input);
    // setInput(initialInput);
    // onClose();
    // toast.success('success register, please log in to continue.');
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err.response?.data.message);
    // } finally {
    //   stopLoading();
    // }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col space-y-2">
        <label className="block ">
          <span className="text-sm font-medium text-slate-700">Firstname</span>

          <input
            className="w-full py-2 px-2 rounded-md border border-slate-400"
            type="name"
            placeholder="First name"
            value={input.userName}
            onChange={handleChangeInput}
            error={error.userName}
            name="userName"
            id="userName"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Surname</span>

          <input
            className="w-full  rounded-md border border-slate-400"
            type="text"
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangeInput}
            error={error.lastName}
            name="lastName"
            id="lastName"
          />
        </label>

        <label className="text-sm font-light" htmlFor="email">
          Email
        </label>
        <input
          className="  rounded-md border border-slate-400"
          type="email"
          placeholder="Your Email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light" htmlFor="password">
          Password
        </label>
        <input
          className=" rounded-md border border-slate-400"
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
          name="password"
          id="password"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          className="rounded-md border border-slate-400"
          type="password"
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <br />
      <button
        className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
