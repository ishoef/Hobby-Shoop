import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PreLoader from "../Components/Loader/PreLoader/PreLoader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const className = "flex justify-center items-center min-h-screen";

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader className={className}></PreLoader>;
  }

  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
