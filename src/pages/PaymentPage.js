import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import qrCode from '../assets/images/qrcode.jpg';
import { Link } from 'react-router-dom';
import { Download } from '../assets/picture';

export default function PaymentPage() {
  const handliSubmitForm = e => {
    e.preventDefault();
  };
  return (
    <>
      <HeaderCart />
      <div className="justify col w-full">
        <div className="flex items-center justify-center w-full p-16">
          <img className="w-[250] h-[300]" src={qrCode} />
        </div>
        <Link to={{ pathname: '/slipuserpage' }}>
          <div className="flex justify-center">
            <button
              type="button"
              className=" rounded-full py-2 px-3 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl w-[200px] "
              // onClick={handliSubmitForm}
            >
              <div className="flex">
                <div className="fill-white h-[20px] w-[20px] mx-4">
                  <Download />
                </div>
                <p>Save Image</p>
              </div>
            </button>
          </div>
        </Link>
      </div>
      <FooterUser />
    </>
  );
}
