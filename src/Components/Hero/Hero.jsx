import React from "react";
import { Link } from "react-router";

const Hero = ({ title, btnTitle, description, bannerPic }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-11/12 lg:w-10/12 mx-auto bg-base-300 dark:bg-gray-800 px-5 md:px-10 lg:px-20 my-10 rounded-2xl">
      <div className="left w-full flex flex-col gap-5 items-center md:items-start basis-4/5">
        <h1 className="text-5xl font-semibold text-center md:text-start">
          {title || "Welcome to Hobby Shop"}
        </h1>
        <p className="text-center md:text-start">{description}</p>
        <Link to="/creategroup">
          <button className="btn btn-primary text-[18px] mb-5">
            {btnTitle || "Create New Group"}
          </button>
        </Link>
      </div>

      <div className="right w-full flex justify-center md:justify-end items-center">
        <img
          className="w-50 md:w-100"
          src={bannerPic || "https://i.ibb.co/3y0f1x5/banner.png"}
          alt="Banner Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
