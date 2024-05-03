import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-3 bg-gray-100 text-black">
      <div className="max-w-7xl w-full flex justify-between">
        <p className="text-4xl font-semibold">Logo</p>
        <ul className="flex items-center gap-10 text-lg">
          <li>Home</li>
          <li>Services</li>
          <li>Company</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
