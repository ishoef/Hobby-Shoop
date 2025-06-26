import React from "react";
import { Outlet } from "react-router";

const DashBoardContent = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-3">
      <Outlet />
    </div>
  );
};

export default DashBoardContent;
