const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      {/* sidenav  */}
      <div className="col-span-3 border-r-2 h-full">SideBar</div>
      {/* content */}
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
