export default function Signup() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <form
        className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
        action=""
      >
        <h1 className="text-center text-3xl">Sign up</h1>
        <div className="flex flex-col space-y-2">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Firstname
            </span>

            <input
              className="w-full px-3 py-2 rounded-md border border-slate-400"
              type="name"
              placeholder="Firstname"
              name="name"
              id="name"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Surname
            </span>

            <input
              className="w-full px-3 py-2 rounded-md border border-slate-400"
              type="lastname"
              placeholder="Surname"
              name="lastname"
              id="lastname"
            />
          </label>

          <label className="text-sm font-light" for="email">
            Email
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" for="password">
            Password
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
          ></input>
        </div>
        <button
          className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
