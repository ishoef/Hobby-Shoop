import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { LiaLayerGroupSolid, LiaUsersSolid } from "react-icons/lia";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="sticky top-24 md:border h-[calc(100vh-9rem)] overflow-y-auto border-gray-300 dark:border-primary/10 rounded-xl md:p-3">
      <nav>
        <ul className="flex flex-col items-center gap-3 ">
          <Link
            to={"/dashboard/overview"}
            className="border w-full border-gray-300 dark:border-primary/10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <AiOutlineDashboard size={22} color="#ff6b35" />
              <span className="hover:text-primary hidden md:block">
                Overview
              </span>
            </p>
          </Link>

          <Link
            to={"/dashboard/allgroups"}
            className="border w-full border-gray-300 dark:border-primary/10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <LiaLayerGroupSolid size={22} color="#ff6b35" />
              <span className="hover:text-primary hidden md:block">
                All Groups
              </span>
            </p>
          </Link>

          <Link
            to={"/dashboard/users"}
            className="border w-full border-gray-300 dark:border-primary/10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <PiUsersThreeBold size={22} color="#ff6b35" />
              <span className="hover:text-primary hidden md:block">
                All Users
              </span>
            </p>
          </Link>

          <Link
            to="/dashboard/mygroups"
            className="border w-full border-gray-300 dark:border-primary/10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaLayerGroup size={20} color="#ff6b35" />
              <span className="hover:text-primary hidden md:block">
                My Groups
              </span>
            </p>
          </Link>

          <Link
            to="/dashboard/creategroup"
            className="border w-full border-gray-300 dark:border-primary/10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary p-2 "
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <IoCreate size={22} color="#ff6b35" />
              <span className="hover:text-primary hidden md:block">
                Create Groupe
              </span>
            </p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
