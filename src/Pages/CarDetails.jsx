import { Link, useParams } from "react-router-dom";
import carData from "../data/carData";
import { useEffect } from "react";
import BackButton from "../Pages/BackButton";

function CarDetails() {
  const { id } = useParams();
  const car = carData.find((car) => car.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="w-full h-auto p-4">
      <BackButton />
      <div className="w-full h-auto flex items-center justify-center">
        <img
          src={car.image}
          alt={car.title}
          className="w-[100%] sm:w-[50%] h-full pt-[4rem]"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6 mt-36">{car.title}</h1>
      <p className="text-lg">{car.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
        {car.overview.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white text-black hover:bg-orange-400"
          >
            {index === 0 && (
              <h2 className="font-semibold text-4xl mb-4">
                <i className="fa-solid fa-gauge-high"></i>
              </h2>
            )}
            {index === 1 && (
              <h2 className="font-semibold text-4xl mb-4">
                <i className="fa-solid fa-chair"></i>
              </h2>
            )}
            {index === 2 && (
              <h2 className="font-semibold text-4xl mb-4">
                <i className="fa-solid fa-gas-pump"></i>
              </h2>
            )}
            <p className="mt-2">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to={`/payment?rentPrice=${car.rentPrice}`}
          className="block text-lg mt-2 text-white bg-green-500 hover:bg-green-600 p-4 rounded-md text-center font-bold capitalize cursor-pointer w-full"
        >
          Book Now : {car.rentPrice}
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
