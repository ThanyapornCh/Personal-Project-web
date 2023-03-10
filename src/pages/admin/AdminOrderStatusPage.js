import AdminCheckOrder from '../../components/AdminCheckOrder';
import HeaderAdmin from '../../layouts/HeaderAdmin';
import FooterAdmin from '../../components/FooterAdmin';

export default function AdminOrderStatusPage() {
  return (
    <>
      <HeaderAdmin />
      <AdminCheckOrder />
      {/* <CartTotal /> */}
      <FooterAdmin />
    </>
  );
}
