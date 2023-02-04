import lllLogo from '../assets/icons/lll.png';
// import LoginForm from '../features/Auth/LoginForm';

export default function LoginPage() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <div className="bg-pink rounded-xl ">
        <span className="flex-center box-decoration-slice w-10  text-white px-2 rounded-5">
          <h1 className="flex justify-center text-3xl font-bold text-white">
            Login
          </h1>

          <form
            className=" max-w-sm mx-auto p-10 bg-white rounded-xl drop-shadow-lg space-y-5 m-md"
            action=""
          >
            <div className="flex justify-center">
              <img
                className="flex justify-center object-cover"
                src={lllLogo}
                width="60px"
              />
            </div>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Email
              </span>

              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                type="email"
                placeholder="Email Address Password"
                name="email"
                id="email"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Password
              </span>

              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                type="password"
                placeholder="Your Password"
                name="password"
                id="password"
              />
            </label>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label className="text-sm text-black font-light" for="remember">
                Remember me
              </label>
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
          <div className="flex justify-center">
            <button className="bg-[#F67280]-500 hover:bg-[#F67280]-700 text-white rounded-x1 flex justify-center ">
              Create New Account
            </button>
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
