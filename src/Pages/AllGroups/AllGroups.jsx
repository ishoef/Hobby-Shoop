import React from "react";
import FeaturedGroups from "../../Components/FeaturedGroupes/FeaturedGroups";
import ItemsLoader from "../../Components/Loader/ItemsLoader";

const AllGroups = () => {

  // Set the document title
  React.useEffect(() => {
    document.title = "All Groups | Hobby Shop";
  }, []);

  const className = "grid md:grid-cols-3 lg:grid-cols-4 gap-5";

  // Render the component
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-5 md:mt-20 mb-10">
      <h1 className="title text-center">Explore All Groups</h1>
      <div className="min-h-[calc(100vh-477px)]">
        <FeaturedGroups
          loderClass={className}
          className={className}
          showSeeAll={false}
        ></FeaturedGroups>
      </div>
    </div>
  );
};

export default AllGroups;
