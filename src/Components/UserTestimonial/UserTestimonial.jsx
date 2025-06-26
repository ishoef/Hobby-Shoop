import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FF6B35] text-white p-2 rounded-full shadow hover:bg-[#e55c2b]"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FF6B35] text-white p-2 rounded-full shadow hover:bg-[#e55c2b]"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const UserTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      message: "HobbyHub helped me find an amazing painting group!",
      name: "— Ayesha R.",
    },
    { id: 2, message: "Hiking crew changed my weekends!", name: "— Rahul M." },
    { id: 3, message: "I met inspiring writers here.", name: "— Hasan M." },
    { id: 4, message: "UI is clean and easy to use!", name: "— Sabrina K." },
    {
      id: 5,
      message: "I started a cooking club with HobbyHub!",
      name: "— Farhan A.",
    },
    {
      id: 6,
      message: "I recommend this to all hobby lovers!",
      name: "— Tanvir A.",
    },
    {
      id: 7,
      message: "Joined a fun book club through this!",
      name: "— Maria Z.",
    },
    {
      id: 8,
      message: "Great experience creating my own group.",
      name: "— Imran N.",
    },
    {
      id: 9,
      message: "So many hobbies I discovered here!",
      name: "— Arifa B.",
    },
    { id: 10, message: "Smooth login and UI experience.", name: "— Jaber K." },
    {
      id: 11,
      message: "I enjoy every meetup from my group!",
      name: "— Neha S.",
    },
    {
      id: 12,
      message: "Perfect for passionate hobbyists.",
      name: "— Moazzem F.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 md:py-22 dark:bg-gray-800 relative">
      <h2 className="text-3xl font-bold text-center text-[#FF6B35] mb-10">
        Members Talk
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-3">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow h-full flex flex-col justify-between">
                <p className="text-gray-700 dark:text-white italic mb-4">“{t.message}”</p>
                <span className="font-semibold text-[#FF6B35]">{t.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserTestimonial;
