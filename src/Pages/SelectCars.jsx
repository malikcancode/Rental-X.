import { Link, useLocation } from "react-router-dom";
import carData from "../data/carData";
import { useEffect } from "react";
import BackButton from "./BackButton";

function SelectCars() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const pickupDate = queryParams.get("pickupDate");
  const returnDate = queryParams.get("returnDate");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 w-full h-full">
      <BackButton />
      <div
        className="text-section w-full h-full flex items-center justify-center gap-4 
      tracking-wider mb-4 font-light mt-8 sm:mt-0"
      >
        <span className="bg-orange-600 text-white p-2 px-4 rounded-md text-sm">
          Pick-Up Date: {pickupDate}
        </span>
        <span className="bg-orange-600 text-white p-2 px-4 rounded-md  text-sm">
          Return Date: {returnDate}
        </span>
      </div>

      {carData.map((car) => (
        <div
          key={car.id}
          className="flex flex-col sm:flex-row w-full items-center justify-between mb-4 rounded-md shadow-2xl overflow-hidden p-6 mt-8"
        >
          <div className="p-2 flex flex-col justify-center items-start w-full sm:w-[60%] order-2 sm:order-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {car.title}
            </h2>
            <p className="text-sm sm:text-base text-wrap">{car.description}</p>
            <ul className="flex flex-col sm:flex-row mb-4 sm:mb-5 gap-2 sm:gap-4 pt-4 sm:pt-5">
              {car.overview.map((item, index) => (
                <li key={index} className="text-sm sm:text-base font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={`/payment?rentPrice=${car.rentPrice}`}
              className="flex items-center justify-center bg-green-500 text-white p-2 px-12 font-semibold rounded-md
             w-full h-full sm:w-[40%] mt-4"
            >
              <span className="px-2 capitalize">Book Now {car.rentPrice}</span>
            </Link>
          </div>
          <div className="w-[80%] sm:w-[30%] flex items-center justify-center mb-4 sm:mb-0 order-1 sm:order-2">
            <img
              src={car.image}
              alt={car.title}
              className="object-cover w-full h-auto sm:h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectCars;
