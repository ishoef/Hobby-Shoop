import React from "react";
import FeaturedGroups from "../../Components/FeaturedGroupes/FeaturedGroups";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import UserTestimonial from "../../Components/UserTestimonial/UserTestimonial";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  // Set the document title
  React.useEffect(() => {
    document.title = "Home | Hobby Shop";
  }, []);

  const title = "Featured Groups";

  const className =
    "grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-9/12 mx-auto";

  const loderClass =
    "grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-9/12 mx-auto";
  return (
    <>
      <Slider></Slider>
      <div className="w-11/12 md:w-10/12  mx-auto mt-10 md:mt-20 mb-10">
        <FeaturedGroups
          loderClass={loderClass}
          className={className}
          sixCards={true}
          showSeeAll={true}
          title={title}
        ></FeaturedGroups>
      </div>
      <HowItWorks></HowItWorks>
      <UserTestimonial></UserTestimonial>
    </>
  );
};

export default Home;
