import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="p-3 w-72 bg-blue-500 shadow-md shadow-slate-400 rounded-r-md text-white sticky top-0"
      style={{ height: "100vh" }}
    >
      <ul className="flex flex-col gap-5 items-center mt-10 text-xl">
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
        <li>Menu5</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
