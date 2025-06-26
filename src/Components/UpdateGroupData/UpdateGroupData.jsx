import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const UpdateGroupData = () => {
  const { user } = use(AuthContext);
  const groupData = useLoaderData();
  const groupId = useParams();
  console.log("groupId", groupId);

  // Set the document title
  React.useEffect(() => {
    document.title = "Update Group | Hobby Shop";
  }, []);

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      userName: user?.displayName || "",
      userEmail: user?.email || "",
    };

    console.log("Updated Group Data:", updatedGroup);

    // Send updated data to the server
    fetch(`https://hobby-shop-server-side.vercel.app/groups/${groupData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Group updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false, 
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect after clicking OK
              window.location.href = "/mygroups";
            }
          });

          form.reset();
        } else {
          Swal.fire("Error!", "Failed to update the group.", "error");
        }
      });
  };

  return (
    <div className="py-10 md:py-20 w-11/12 md:w-10/12 mx-auto">
      <form
        onSubmit={handleUpdateGroup}
        className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg space-y-4"
      >
        <h2 className="text-3xl text-primary font-semibold mb-4 text-center">
          Update Group Data
        </h2>

        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          defaultValue={groupData.groupName || ""}
          className="input input-bordered focus:border-primary focus:outline-none w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full focus:border-primary focus:outline-none"
          required
          defaultValue={groupData.category || ""}
        >
          <option value="" disabled>
            Select Hobby Category
          </option>
          <option value="Drawing & Painting">Drawing & Painting</option>
          <option value="Photography">Photography</option>
          <option value="Cooking">Cooking</option>
          <option value="Reading">Reading</option>
          <option value="Writing">Writing</option>
          <option value="Video Gaming">Video Gaming</option>
          <option value="Hiking">Hiking</option>
          <option value="Coding">Coding</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          defaultValue={groupData.description || ""}
          className="textarea textarea-bordered w-full focus:border-primary focus:outline-none"
          rows="4"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Meeting Location"
          defaultValue={groupData.location || ""}
          className="input input-bordered w-full focus:border-primary focus:outline-none"
          required
        />

        <input
          type="number"
          name="maxMembers"
          placeholder="Max Members"
          defaultValue={groupData.maxMembers || ""}
          className="input input-bordered w-full focus:border-primary focus:outline-none"
          required
        />

        <input
          type="date"
          name="startDate"
          defaultValue={groupData.startDate || ""}
          className="input input-bordered w-full focus:border-primary focus:outline-none"
          required
        />

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          defaultValue={groupData.imageUrl || ""}
          className="input input-bordered w-full focus:border-primary focus:outline-none"
          required
        />

        <input
          type="text"
          name="userName"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 focus:border-primary focus:outline-none"
        />

        <input
          type="email"
          name="userEmail"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 focus:border-primary focus:outline-none"
        />

        <button
          type="submit"
          className="btn btn-primary w-full bg-[#FF6B35] hover:bg-[#e35c27]"
        >
          Update Group
        </button>
      </form>
    </div>
  );
};

export default UpdateGroupData;
