import React, { useEffect, useState } from "react";
import State from "../State/State";
import { LiaUsersSolid } from "react-icons/lia";
import { FaLayerGroup } from "react-icons/fa";

const OverView = () => {
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsersCount(data))
      .catch((error) => {
        console.log("the error fetching the users", error);
      });
  }, []);

  console.log(usersCount.length);

  const stateInfo = [
    {
      icon: <LiaUsersSolid />,
      title: "Total Users",
      count: `${usersCount.length}`,
      parcent: "80% increase in 20 days",
    },

    {
      icon: <FaLayerGroup />,
      title: "Total Groups",
      count: "5000",
      parcent: "80% increase in 20 days",
    },

    {
      icon: <LiaUsersSolid />,
      title: "Total Students",
      count: "5000",
      parcent: "80% increase in 20 days",
    },

    {
      icon: <LiaUsersSolid />,
      title: "Total Students",
      count: "5000",
      parcent: "80% increase in 20 days",
    },
  ];

  return (
    <div>
      <div className="space-y-5 ">
        <h1 className="text-3xl font-semibold text-primary">Overview</h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stateInfo.map((stat, index) => (
            <State key={index} info={stat}></State>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
