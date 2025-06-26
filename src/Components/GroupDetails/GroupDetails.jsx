import React from "react";
import { MdOutlineCreate, MdOutlineMailOutline } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const GroupDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();
  
  // Set the document title 
  React.useEffect(() => {
    document.title = "Group Details | Hobby Shop";
  }, []);

  // Find the group details by ID
  const group = details.find((group) => group._id === id);

  // If group not found, display a message
  if (!group) {
    return <div className="text-center">Group not found</div>;
  }

  // Destructure the group details
  const {
    _id,
    groupName,
    category,
    maxMembers,
    userName,
    description,
    userEmail,
    location,
    startDate,
    imageUrl,
  } = group;


  // Function to handle joining the group
  const handleJoin = () => {

    // Check if the group start date is in the past
    const today = new Date();
    const groupStartDate = new Date(startDate);

    if (groupStartDate < today.setHours(0, 0, 0, 0)) {
      Swal.fire({
        title: "Date Expired",
        text: "You cannot join this group because the start date has already passed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // If the date is valid, proceed with the join confirmation 
    Swal.fire({
      title: "Join Group",
      text: "Are you sure you want to join this group?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, join it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you can add the logic to handle joining the group
        Swal.fire(
          "Joined!",
          "You have successfully joined the group.",
          "success"
        );
      } else if (result.isDismissed) {
        Swal.fire("Cancelled", "You have not joined the group.", "info");
      }
    });
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10">
      <div className="w-full lg:w-6/12 mx-auto">
        <h1 className="title text-center">{`${groupName} Group Details`}</h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div>
            <img className="w-full" src={imageUrl} alt="" />
          </div>
          <div>
            <div className="flex items-center flex-wrap gap-4 mb-4 mt-5">
              <p className="text-white px-2 py-1 bg-primary rounded">
                {" "}
                {category}
              </p>
              <p className="text-white px-2 py-1 bg-primary rounded">
                {" "}
                {maxMembers} Members
              </p>
              <p className="text-white px-2 py-1 bg-primary rounded">
                {" "}
                {location}
              </p>
              <p className="text-white px-2 py-1 bg-primary rounded">
                {" "}
                {startDate}
              </p>
            </div>
            <h1 className="text-3xl font-semibold text-primary">{groupName}</h1>
            <div>
              <div className="flex items-center gap-2 mt-3 text-[18px]">
                <MdOutlineCreate color="#FF6B35" size={18} /> {`${userName}`}
              </div>
              <div className="flex items-center gap-2 text-[18px]">
                <MdOutlineMailOutline color="#FF6B35" size={18} />
                {`${userEmail}`}
              </div>
            </div>

            <div className="text-gray-500 text-2xl mt-10">{description}</div>
            <div>
              <button
                onClick={handleJoin}
                className="btn btn-primary mt-5 text-[16px]"
              >
                Join Group
              </button>
              <Link to={"/allgroups"}>
                <button className="btn btn-primary ml-3 mt-5 text-[16px]">
                  See Other Groups{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
