import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="md:border border-gray-300 rounded-xl md:p-3">
      <nav>
        <ul className="flex flex-col items-center gap-3 ">
          <Link
            to={"/dashboard/overview"}
            className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>

          <Link
            to={"/dashboard/users"}
            className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <PiUsersThreeBold size={22} />
              <span className="hover:text-primary hidden md:block">Users</span>
            </p>
          </Link>

          <Link className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 ">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>

          <Link className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 ">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>

          <Link className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 ">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>

          <Link className="border w-full border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 ">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
