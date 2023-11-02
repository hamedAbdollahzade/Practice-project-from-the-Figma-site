import image8 from "../assets/image 8.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const products = [
    {
      title: "کوی/ سویشرت زنانه  1",
      description: "سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی  قابل سفارش در چهار رنگ",
      price: 1111111,
      previousPrice: 111,
      img: image8,
    },
    {
      title: "title 2",
      description: "description 2",
      price: 2222222222222,
      previousPrice: 222222,
      img: image8,
    },
    {
      title: "title 3",
      description: "description 3",
      price: 33333333333333,
      previousPrice: 33333333,
      img: image8,
    },
    {
      title: "title 4",
      description: "description 4",
      price: 444444444444,
      previousPrice: 44444444,
      img: image8,
    },
    {
      title: "title 5",
      description: "description 5",
      price: 5555555555555555555,
      previousPrice: 555555555,
      img: image8,
    },
    {
      title: "title 6",
      description: "description 6",
      price: 666666666,
      previousPrice: 666666,
      img: image8,
    },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >

        {products.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="m-10 border border-gray-400 text-sm rounded-lg overflow-hidden bg-[#C9CBD1] w-[156px] h-[256px] flex flex-col justify-center items-center">
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="overflow-hidden bg-[#FFFFFF] w-full h-full p-2 rounded-xl flex flex-col justify-center items-start">
                  <b>{item.title}</b>
                  <div>{item.description}</div>
                  <div className="text-red-400">{item.previousPrice}</div>
                  <p>{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </div>
  );
};

export default Slider;
