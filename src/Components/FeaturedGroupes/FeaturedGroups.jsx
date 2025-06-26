import React, { useEffect, useState } from "react";
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router";
import ItemsLoader from "../Loader/ItemsLoader";

const FeaturedGroups = ({
  className,
  title,
  showSeeAll,
  loderClass,
  sixCards,
}) => {
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

  const today = new Date();

  // Step 1: Filter only upcoming groups (startDate > today)
  const upcomingGroups = groupsData.filter(
    (group) => new Date(group.startDate) > today
  );

  // Step 2: Sort by soonest startDate (ascending)
  const sortedUpcomingGroups = upcomingGroups.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // Step 3: Take the first 8 upcoming groups
  const sixGroups = sortedUpcomingGroups.slice(0, 8);

  if (loading) {
    return <ItemsLoader loderClass={loderClass} title={title}></ItemsLoader>;
  }

  return (
    <div className="">
      <h1 className="title text-center">{title}</h1>

      <div className={className}>
        {sixCards
          ? sixGroups.map((group) => (
              <GroupCard key={group._id} group={group}></GroupCard>
            ))
          : groupsData.map((group) => (
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
