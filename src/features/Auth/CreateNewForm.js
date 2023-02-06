// import { navigate, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import useAuth from '../../hooks/useAuth';

// export default function CreateNewForm() {
//   const navigate = useNavigate();
//   const { signup } = useAuth();

//   const handleSubmitForm = e => {
//     try {s
//       e.preventDefault();
//       // console.log(email, password);
//       const res = signup();
//       console.log(res.data);
//       navigate('/signup');

//       toast.success('Begin Signup');
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmitForm}>
//       <div className="flex justify-center">
//         <button
//           className="bg-[#F67280]-500 hover:bg-[#F67280]-700 text-white rounded-x1 flex justify-center "
//           type="submit"
//         >
//           Create New Account
//         </button>
//       </div>
//     </form>
//   );
// }
