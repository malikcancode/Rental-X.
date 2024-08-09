import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import carData from "../data/carData";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const getUniqueCategories = (data) => {
  const categories = data.map((car) => car.category);
  return [...new Set(categories)];
};

const OurServices = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleRentNow = (id) => {
    navigate(`/car-details/${id}`);
  };

  const handleAddToCart = (car) => {
    addToCart(car);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const filteredCars = activeTab
    ? carData.filter((car) => car.category === activeTab)
    : carData;

  const categories = getUniqueCategories(carData);

  return (
    <div className="py-24 w-full h-full">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <h2 className="text-center font-semibold tracking-wide text-4xl mb-16 services">
          Our Services
        </h2>
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => handleTabClick(null)}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(category)}
              className={`px-1 sm:px-4 py-2 rounded-md font-medium ${
                activeTab === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            240: { width: 240, slidesPerView: 1 },
            640: { width: 640, slidesPerView: 3 },
            768: { width: 768, slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {filteredCars.map((car) => (
            <SwiperSlide
              key={car.id}
              className="w-full h-full flex m-4 justify-center items-center"
            >
              <div
                className="w-full h-full relative p-6 flex flex-col gap-6 sm:gap-8 items-start
                bg-[#dad7cd] rounded-md cursor-move"
              >
                <div className="absolute top-2 right-2 cursor-pointer">
                  {isInCart(car.id) ? (
                    <i
                      onClick={() => handleRemoveFromCart(car.id)}
                      className="ri-heart-fill text-red-500 text-xl"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleAddToCart(car)}
                      className="ri-heart-line text-red-500 text-xl"
                    ></i>
                  )}
                </div>
                <img
                  src={car.image}
                  alt={car.title}
                  className="object-contain w-full h-full"
                />
                <h3
                  className="text-black capitalize flex flex-col items-start justify-center
                 gap-2"
                >
                  <span className="font-semibold tracking-wide">
                    {car.title}
                  </span>
                  <span className="font-light text-sm text-red-700">
                    {car.category}
                  </span>
                  <span className="text-sm tracking-wide">
                    Price: {car.rentPrice}
                  </span>
                </h3>
                <button
                  className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-700 transition duration-300"
                  onClick={() => handleRentNow(car.id)}
                >
                  Rent Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
