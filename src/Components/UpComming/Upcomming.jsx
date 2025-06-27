import { Link } from "react-router";
import { LuFileX2 } from "react-icons/lu";
import { useEffect } from "react";

const Upcomming = () => {
  useEffect(() => {
    document.title = "UpComming | Hobby Shop";
  }, []);

  return (
    <div className="">
      <div className="w-[80%] mx-auto min-h-[calc(100vh-300px)] flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <LuFileX2 color="#FF6B35" size={100} />
          <h1 className="text-3xl text-center">
            <span className="text-primary font-semibold">Ooops!</span> This Item Will Comming Soon...
          </h1>
          <p className="text-center">
            it seems like the page you are trying to access the not be ready yet, Please Wait, it will be soon
          </p>
          <Link to="/">
            <button className="btn rounded-3xl text-white bg-primary text-[18px] hover:bg-transparent hover:text-primary">
              Chill With Our Hobbies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
