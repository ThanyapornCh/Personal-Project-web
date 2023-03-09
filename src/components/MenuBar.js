import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import SearchBar from './Header';
// import { MagnifyingGlass } from 'flowbite-react';

export default function CategoriesPage() {
  return (
    <div className="w-fit z-index">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to={{ pathname: '/homepage' }}>
              <Sidebar.Item>Dashboard</Sidebar.Item>
            </Link>

            <Link to={{ pathname: '/cartspage' }}>
              <Sidebar.Item>Cart</Sidebar.Item>
            </Link>
            {/* <Sidebar.Item>Payment</Sidebar.Item> */}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Link to={{ pathname: '/userpage' }}>
              <Sidebar.Item>Users</Sidebar.Item>
            </Link>
            <Sidebar.Item>Log out</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
