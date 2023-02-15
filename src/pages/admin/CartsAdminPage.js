import FooterAdmin from '../../components/FooterAdmin';

import CartOrdersAdmin from '../../components/CartOrdersAdmin';
import HeaderCart from '../../layouts/HeaderCart';
import CartTotal from '../../components/CartTotal';

export default function CartsAdminPage() {
  return (
    <>
      <HeaderCart />
      <CartOrdersAdmin />
      {/* <CartTotal /> */}
      <FooterAdmin />
    </>
  );
}
