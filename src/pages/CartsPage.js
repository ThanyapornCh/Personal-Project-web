import FooterUser from '../components/FooterUser';

import CartOrders from '../components/CartOrders';
import HeaderCart from '../layouts/HeaderCart';
// import CartTotal from '../components/CartTotal';

export default function CartsPage() {
  return (
    <>
      <HeaderCart />

      <CartOrders />
      {/* <CartTotal /> */}

      <FooterUser />
    </>
  );
}
