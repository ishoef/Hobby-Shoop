import React, { useEffect, useState } from "react";
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router";
import ItemsLoader from "../Loader/ItemsLoader";

const FeaturedGroups = ({ className, title, showSeeAll, loderClass }) => {
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch groups data from the server
  useEffect(() => {
    fetch("https://hobby-shop-server-side.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroupsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to fetch groups data:", error);
        setGroupsData([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ItemsLoader loderClass={loderClass} title={title}></ItemsLoader>;
  }

  return (
    <div className="">
      <h1 className="title text-center">{title}</h1>

      <div className={className}>
        {groupsData.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>

      {showSeeAll && (
        <div className="w-full mt-8 flex">
          <button
            onClick={() => {
              navigate("/allgroups");
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
            }}
            className="btn btn-primary text-[16px] mx-auto"
          >
            See All Groups
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedGroups;
