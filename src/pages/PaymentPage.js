import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import qrCode from '../assets/images/qrcode.jpg';
import { Link } from 'react-router-dom';

export default function PaymentPage() {
  return (
    <>
      <HeaderCart />
      <div className="justify col w-full">
        <div className="flex items-center justify-center w-full">
          <img className="w-[250] h-[300]" src={qrCode} />
        </div>
        <Link to={{ pathname: '/slippage' }}>
          <button
            type="save"
            className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
            onClick={() => alert('Saved Image')}
          >
            Save
          </button>
        </Link>
      </div>
      <FooterUser />
    </>
  );
}
