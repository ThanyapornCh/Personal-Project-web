import { Sidebar } from 'flowbite-react';

export default function CategoriesPage() {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>Dashboard</Sidebar.Item>
            <Sidebar.Item>Kanban</Sidebar.Item>
            <Sidebar.Item>Inbox</Sidebar.Item>
            <Sidebar.Item>Users</Sidebar.Item>
            <Sidebar.Item>Products</Sidebar.Item>
            <Sidebar.Item>Sign In</Sidebar.Item>
            <Sidebar.Item>Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item>Upgrade to Pro</Sidebar.Item>
            <Sidebar.Item>Documentation</Sidebar.Item>
            <Sidebar.Item>Help</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
