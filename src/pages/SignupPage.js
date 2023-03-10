import RegisterForm from '../features/Auth/RegisterForm';

export default function SignupPage() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <div
        className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5  w-[350px]
    h-[550px]"
      >
        <h1 className="text-center text-3xl">Sign up</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
