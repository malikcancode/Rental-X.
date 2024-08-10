import { Link } from "react-router-dom";
import BarPage from "./BarPage";
import CarPartners from "./CarPartners";
import OurServices from "./OurServices";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page w-full h-full flex items-center justify-center sm:min-h-screen">
        <div className="container mx-auto mb-24 sm:mb-0 p-4">
          <div className="flex flex-col md:flex-row items-center mt-16 sm:mt-0">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8 uppercase leading-tight sm:leading-tight">
                Looking to save more on your
                <br />
                <span className="block text-orange-600">rental car?</span>
              </h1>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Discover the freedom of the open road with Rental X! Choose from
                a wide range of vehicles, from compact cars to luxurious SUVs,
                with a simple booking process and transparent pricing. Whether
                you need a car for a day, a week, or longer, we’ve got you
                covered.
                <span className="block text-orange-600 font-semibold mt-2">
                  Rent your car with confidence and convenience at Rental X
                  today!
                </span>
              </p>
              <Link
                to="/about"
                className="bg-orange-600 text-white py-2 px-4 rounded shadow-lg hover:bg-orange-700 transition"
              >
                About Us
              </Link>
            </div>

            <div className="w-full md:w-1/2 p-4 hidden sm:block">
              <img
                src="/1723014619345z0172i1g.webp"
                alt="Car"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <CarPartners />
      <h2 className="barpage font-semibold text-3xl text-center mt-24">
        Start Your Trip Today
      </h2>
      <BarPage />
      <OurServices />
    </>
  );
};

export default LandingPage;
