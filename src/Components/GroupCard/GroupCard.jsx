import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdDateRange, MdOutlineCreate } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const GroupCard = ({ group }) => {
  
  // If group data is passed, you can use it to display dynamic content
  const { groupName, category, _id, userName, startDate, imageUrl, maxMembers, location } = group || {};

  const navigate = useNavigate();
  return (
    <div>
      <div className="hover:scale-102 transition-all dark:text-gray-400 border border-gray-300 dark:border-gray-500 flex flex-col w-full rounded-xl shadow cursor-pointer pb-5">
        <div className="w-full">
          <img
            className="w-full rounded-t-xl h-50 md:h-50 lg:h-60"
            src={
              imageUrl ||
              "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2tzfGVufDB8fDB8fHww"
            }
          />
        </div>
        <div className="w-full gap-4 px-6 py-5">
          <div className="w-full">
            <h1 className="font-semibold text-primary text-[18px]">
              {groupName || "Group Name"}
            </h1>
            <p className="text-gray-400 mb-2"> {category || "Category"} </p>
          </div>
          <div className="mb-2">
            <p className="flex items-center gap-2">
              <MdOutlineCreate color="#FF6B35" />
              {userName || "User Name"}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <MdDateRange color="#FF6B35" />
              {startDate || "Start Date"}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              {" "}
              <HiUsers color="#FF6B35" />
              {maxMembers || "0"} Members
            </p>
            <p className="flex items-center gap-2">
              <ImLocation color="#FF6B35" />
              {location || "Location"}
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary mx-6 text-[17px] dark:text-gray-200 hover:bg-transparent hover:text-primary transition-all"
          onClick={() => navigate(`/groupDetails/${_id}`)}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
