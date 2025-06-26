import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Hero from "../Hero/Hero";

const Slider = () => {
  const headline1 = "Discover Your Passion";
  const headline2 = "Join Local Communities";
  const headline3 = "Start Your Own Group";

  const btnDiscover = "Discover Now";
  const btnJoin = "Join a Community";
  const btnStart = "Start a Group";

  const descDiscover =
    "Everyone has a passion waiting to be explored. Whether it's art, technology, fitness, or anything in between, HobbyHub helps you uncover interests that bring you joy and fulfillment.";
  const descJoin =
    "Connecting with people who share your hobbies has never been easier. Find local groups that match your interests and enjoy your favorite activities together.";
  const descStart =
    "Have a unique interest? Create your own group and lead a community where creativity and collaboration thrive.";

  const bannerPic1 =
    "https://i.ibb.co/RT550GjZ/Chat-GPT-Image-May-23-2025-08-21-41-AM.png ";
  const bannerPic2 =
    "https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png";
  const bannerPic3 =
    "https://i.ibb.co/Fkymc7mH/Chat-GPT-Image-May-26-2025-12-28-17-PM.png";

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded overflow-hidden mySwiper"
      >
        {/* new */}
        <SwiperSlide>
          <Hero
            bannerPic={bannerPic1}
            btnTitle={btnDiscover}
            description={descDiscover}
            title={headline1}
          ></Hero>
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            bannerPic={bannerPic2}
            btnTitle={btnJoin}
            description={descJoin}
            title={headline2}
          ></Hero>
        </SwiperSlide>

        <SwiperSlide>
          <Hero
            bannerPic={bannerPic3}
            btnTitle={btnStart}
            description={descStart}
            title={headline3}
          ></Hero>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
