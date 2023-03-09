import { Link } from 'react-router-dom';
import lllLogo from '../assets/icons/lll.png';
// import CreateNewForm from '../features/Auth/CreateNewForm';
import LoginForm from '../features/Auth/LoginForm';

export default function LoginPage() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <div className="bg-pink rounded-xl ">
        <span className="flex-center box-decoration-slice w-10  px-2 rounded-5">
          <h1 className="flex justify-center text-3xl font-bold text-white">
            Login
          </h1>

          <div className="max-w-sm mx-auto p-10 bg-white rounded-xl drop-shadow-lg space-y-5 m-md">
            <div className="flex justify-center">
              {/* <img
                className="flex justify-center object-cover"
                src={lllLogo}
                width="60px"
              /> */}
              <h4 className="text-pink font-bold flex justify-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-2xl">
                  LALA
                  <br />
                  Shop
                </span>
              </h4>
            </div>

            <LoginForm />

            {/* <p className="text-right">
              <a
                className="text-blue-600 text-sm font-light hover:underline"
                href="https://www.google.com"
              >
                Forget Password?
              </a>
            </p> */}
            {/* </div> */}
          </div>
          {/* <CreateNewForm /> */}
          <div className="flex justify-center">
            <Link to={{ pathname: '/signup' }}>
              <button className="bg-[#F67280]-500 hover:bg-[#F67280]-700 text-white rounded-x1 flex justify-center ">
                Create New Account
              </button>
            </Link>
          </div>
        </span>
        <div className="flex flex-justify-center my-10 mx-20">
          <div className="text-4xl text-[#fff] flex-col m-2 p-2">
            <i className="fa-brands fa-facebook" />
          </div>
          <div className=" text-4xl text-[#fff] flex-col m-2 p-2">
            <i className="fa-brands fa-instagram" />
          </div>
          <div className="text-4xl text-[#fff] flex-col m-2 p-2 stroke-cyan-500 ">
            <i className="fa-brands fa-google" />
          </div>
        </div>
      </div>
    </div>
  );
}
