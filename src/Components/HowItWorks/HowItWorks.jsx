import React from "react";
import { GiThreeFriends } from "react-icons/gi";
import { IoCreate, IoSearchSharp } from "react-icons/io5";
import { MdOutlineJoinInner } from "react-icons/md";
import { Link } from "react-router";

const HowItWorks = () => {
  return (
    <div className="mt-10 md:mt-20 mb-10">
      <div className="bg-base-100 dark:bg-gray-800 w-11/12 md:w-10/12 mx-auto py-10 rounded-2xl border border-[#ff6b3590] px-3">
        <h1 className="title text-center border-b pb-5 mx-20">How it Works</h1>
        <div className="flex justify-evenly flex-wrap gap-5 items-center my-10 md:p-10">
          <Link to="/creategroup">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-[#FF6B3550] dark:bg-gray-700 flex justify-center items-center cursor-pointer hover:scale-102">
                <IoCreate color="#ff6b35" size={64} />
              </div>
              <p className="text-2xl font-semibold hover:text-primary cursor-pointer">
                Create Group
              </p>
            </div>
          </Link>
          <Link to="/allgroups">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-[#FF6B3550] dark:bg-gray-700 flex justify-center items-center">
                <IoSearchSharp color="#ff6b35" size={64} />
              </div>
              <p className="text-2xl font-semibold hover:text-primary cursor-pointer">
                Find Group
              </p>
            </div>
          </Link>
          <Link to="/allgroups">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-[#FF6B3550] dark:bg-gray-700  flex justify-center items-center">
                <MdOutlineJoinInner color="#ff6b35" size={64} />
              </div>
              <p className="text-2xl font-semibold hover:text-primary cursor-pointer">
                Join
              </p>
            </div>
          </Link>
          <Link to="/allgroups">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-[#FF6B3550] dark:bg-gray-700 flex justify-center items-center">
                <GiThreeFriends color="#ff6b35" size={64} />
              </div>
              <p className="text-2xl font-semibold hover:text-primary cursor-pointer">
                Chill Borroh
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
