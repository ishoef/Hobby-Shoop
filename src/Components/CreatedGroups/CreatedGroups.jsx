import React, { useEffect } from "react";
import GroupTableRow from "../GroupTableRow/GroupTableRow";

const CreatedGroups = ({ groups, setGroups }) => {
  useEffect(() => {
    document.title = "My Groups | Hobby Shop";
  }, []);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10">
      <h1 className="title text-center">My Groups</h1>
      <div className="overflow-x-auto min-h-[calc(100vh-438px)]">
        <table className="table table-lg border border-[#FF6B3580] rounded-2xl">
          <thead>
            <tr className="bg-primary dark:bg-gray-800 text-white text-[18px]">
              <th>Image</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Members</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <GroupTableRow
                groups={groups}
                setGroups={setGroups}
                key={group._id}
                group={group}
              ></GroupTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedGroups;
