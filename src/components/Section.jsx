import React from "react";

// ✅ Hero Section (Top Banner)
const HeroSection = () => {
  return (
    <section className="bg-white text-black flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-semibold">iPhone 16 Pro</h1>
      <p className="text-lg md:text-2xl mt-3">Built for power. Designed for you.</p>

      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Learn more
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
          Buy
        </button>
      </div>

      <img
        src="https://cdn.mos.cms.futurecdn.net/maTpVXCMYmKnnDMQfWxxN6-1200-80.png"
        alt="iPhone 16 Pro"
        className="mt-10 w-full max-w-5xl object-contain"
      />
    </section>
  );
};

// ✅ Product Sections (4 Cards)
const productSections = [
  {
    title: "MacBook Air",
    subtitle: "Supercharged by M3.",
    img: "https://www.apple.com/v/macos/continuity/i/images/overview/hero_macbook__ehrgm8alx0qe_large_2x.jpg"
  },
  {
    title: "iPad Pro",
    subtitle: "Thinpossible.",
    img: "https://www.apple.com/v/ipad-pro/av/images/overview/hero/hero_endframe__sg50vzdd6sqm_large_2x.jpg",
    bg: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Apple Watch Series 10",
    subtitle: "Smarter. Brighter. Better.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-compare-s11-202509_FMT_WHH?wid=296&hei=296&fmt=jpeg&qlt=90&.v=dWNxM2FBcWh6K3lqd1ZDZ0J0SmQzLzRxZ3huVnJIT2RsYmVuZmY3VmJyWVVRZEpaT1dTYTRVRGJYVlZ5a1RjamJGcXNRQnFCV0w3WVRjTExvdm1ic2Zod2h2SXJqUWFnZjgyKzVoUEVRcndXZEdHNUFPR0hYUU12cjI0VlFzM1A",
    bg: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "AirPods Pro 3",
    subtitle: "Built for power. Designed for you.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=976&hei=916&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eWVDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",
    bg: "bg-black",
    textColor: "text-white",
  },
];

const ProductSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-3 p-5 gap-3">
      {productSections.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col items-center justify-center text-center py-16 ${item.bg}`}
        >
          <h2 className={`text-3xl md:text-5xl font-semibold ${item.textColor}`}>
            {item.title}
          </h2>
          <p className={`text-lg mt-2 ${item.textColor}`}>{item.subtitle}</p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
              Buy
            </button>
          </div>

          <img
            src={item.img}
            alt={item.title}
            className="mt-10 w-full max-w-md object-contain"
          />
        </section>
      ))}
    </div>
  );
};

// ✅ Main Combined Section Component
const Section = () => {
  return (
    <div className="mt-5">
      <HeroSection />
      <ProductSections />
    </div>
  );
};

export default Section;
