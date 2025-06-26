import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateGroupForm = ({ user }) => {
  // Set the document title
  React.useEffect(() => {
    document.title = "Create Group | Hobby Shop";
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // values from form inputs
    const form = e.target;
    const formData = {
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

    const newGroup = formData;

    console.log(formData);

    // send data to the server
    fetch("https://hobby-shop-server-side.vercel.app/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after Post", data);

        // reset the form
        form.reset();

        // show success alert
        Swal.fire("Success!", "Group created successfully.", "success");
        navigate("/mygroups", { state: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire("Error", "Failed to create group.", "error");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-xl mx-auto p-6 dark:text-gray-200 shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-3xl text-primary font-semibold mb-4 text-center">
        Create New Group
      </h2>

      <input
        type="text"
        name="groupName"
        placeholder="Group Name"
        className="input input-bordered focus:border-primary focus:outline-none w-full "
        required
      />

      <select
        name="category"
        className="select select-bordered w-full focus:border-primary focus:outline-none"
        required
        defaultValue=""
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
        className="textarea textarea-bordered w-full focus:border-primary focus:outline-none"
        rows="4"
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Meeting Location"
        className="input input-bordered w-full focus:border-primary focus:outline-none"
        required
      />

      <input
        type="number"
        name="maxMembers"
        placeholder="Max Members"
        className="input input-bordered w-full focus:border-primary focus:outline-none"
        required
      />

      <input
        type="date"
        name="startDate"
        className="input input-bordered w-full focus:border-primary dark:focus:outline-0 focus:outline-none"
        required
      />

      <input
        type="url"
        name="imageUrl"
        placeholder="Image URL"
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
        Create Group
      </button>
    </form>
  );
};

export default CreateGroupForm;
