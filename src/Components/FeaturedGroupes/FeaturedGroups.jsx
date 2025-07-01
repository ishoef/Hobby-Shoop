

import React, { useEffect, useState } from "react";
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router";
import ItemsLoader from "../Loader/ItemsLoader";
import SplitText from "../../Animation/SplitTex";

const FeaturedGroups = ({
  className,
  title,
  showSeeAll,
  loderClass,
  sixCards,
}) => {
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  const navigate = useNavigate();

  // Fetch groups data from the server
  useEffect(() => {
    fetch("https://hobby-shop-server.vercel.app/groups")
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

  // const today = new Date();

  // // Step 1: Filter only upcoming groups (startDate > today)
  // const upcomingGroups = groupsData.filter(
  //   (group) => new Date(group.startDate) > today
  // );

  // Step 1: Sort all groups by startDate
  const sortedGroups = groupsData.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // Step 3: Slice the first 8 if sixCards is true
  const displayedGroups = sixCards ? sortedGroups.slice(0, 8) : sortedGroups;

  if (loading) {
    return <ItemsLoader loderClass={loderClass} title={title} />;
  }

  return (
    <div className="">
      <h1 className="title text-center"><SplitText text={title} /></h1>

      {/* Sort Order Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          className="btn btn-outline text-gray-500"
        >
          Sort by Date: {sortOrder === "asc" ? "Ascending ⬆️" : "Descending ⬇️"}
        </button>
      </div>

      <div className={className}>
        {displayedGroups.map((group) => (
          <GroupCard key={group._id} group={group} />
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
