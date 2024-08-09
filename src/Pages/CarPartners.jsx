const CarPartners = () => {
  return (
    <div className="h-full sm:h-[40vh] container mx-auto pt-20 sm:pt-0 flex items-center justify-center">
      <div className="w-full grid grid-cols-6 gap-8 sm:gap-0 place-items-center bg-[#dad7cd] p-8 rounded-md md:grid-cols-6">
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/pngegg.png"
          alt="Audi Logo"
        />
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/NicePng_bmw-logo-png_179495.png"
          alt="BMW Logo"
        />
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/NicePng_cars-logo-png_719105.png"
          alt="Cars Logo"
        />
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/NicePng_hyundai-logo-png_717921.png"
          alt="Hyundai Logo"
        />
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/NicePng_mazda-logo-png_1336998.png"
          alt="Mazda Logo"
        />
        <img
          className="sm:w-[40%] w-[100%] h-auto object-cover"
          src="/logos/NicePng_toyota-logo-png_119635.png"
          alt="Toyota Logo"
        />
      </div>
    </div>
  );
};

export default CarPartners;
