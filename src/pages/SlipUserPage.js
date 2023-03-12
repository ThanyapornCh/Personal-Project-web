import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { uploadSlip } from '../apis/auth-api';

export default function PaymentPage() {
  const imageRef = useRef();
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  const handlePreviewImage = e => {
    setFile(e.target.files[0]);
  };
  const handleSubmitForm = async e => {
    e.preventDefault();
    toast.success('Purchase Success');
    const formData = new FormData();
    formData.append('slipUrl', file);

    try {
      const result = await uploadSlip(formData);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    navigate('/orderstatus');
  };

  return (
    <>
      <HeaderCart />
      <form onSubmit={handleSubmitForm}>
        <div className="justify col w-full">
          <div className="flex items-center justify-center  ">
            <div className="flex-col m-10 ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 flex justify-center text-2xl font-bold">
                Payment
              </span>
              <label
                htmlFor="dropzone-file"
                className="flex justify-center items-center  flex-col items-center justify-center w-[250px] h-[350px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex items-center justify-center pt-5 pb-6">
                  <img
                    className="w-[180px] h-[300px] border-0"
                    src={file ? URL.createObjectURL(file) : ''}
                  />
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="opacity-0"
                  onChange={handlePreviewImage}
                />
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to={{ pathname: '/paymentpage' }}>
              <button
                type="button"
                className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl w-[150px]"
                // onClick={handleSubmitForm}
              >
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl w-[150px]"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
      <FooterUser />
    </>
  );
}
