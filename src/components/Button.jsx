import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const Button = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200",
      title: "Stream your favorite shows",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200",
      title: "Watch anytime, anywhere",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      title: "Entertainment redefined",
    },
  ];

  return (
    <section className="w-full py-10 bg-black">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
  autoplay={{
    delay: 1000, // time in milliseconds (2.5s)
     // keeps autoplay running even after you manually slide
  }}
  loop={true} // makes it continuous
  spaceBetween={30}
  slidesPerView={1}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
                    {slide.title}
                  </h2>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                    Stream Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Button;

