import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const LocationUpdater = ({ userLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (userLocation) {
      map.setView(userLocation, map.getZoom());
    }
  }, [userLocation, map]);

  return null;
};

const BarPage = () => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [userLocation, setUserLocation] = useState([33.6844, 73.0479]);
  const [locationError, setLocationError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    return location && pickupDate && returnDate && phoneNumber.length === 10;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value
      .replace(/^\+92/, "")
      .replace(/\D/g, "")
      .slice(0, 10);
    setPhoneNumber(numericValue);
  };

  const handleDateChange = (event, setter) => {
    setter(event.target.value);
  };

  const fetchCoordinates = async (city) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        city
      )}&format=json&limit=1`
    );
    const data = await response.json();
    if (data.length > 0) {
      const latitude = parseFloat(data[0].lat);
      const longitude = parseFloat(data[0].lon);
      return [latitude, longitude];
    } else {
      throw new Error("City not found");
    }
  };

  const handleGetLocation = async () => {
    try {
      const [latitude, longitude] = await fetchCoordinates(location);
      setUserLocation([latitude, longitude]);
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
      setLocationError("Unable to find the city.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setLocationError("Please fill in all fields correctly.");
      return;
    }
    navigate(`/select-cars?pickupDate=${pickupDate}&returnDate=${returnDate}`);
  };

  return (
    <div className="barpage flex flex-col sm:flex-row justify-center items-start h-full p-4 pt-16 sm:pt-12 gap-8">
      <div className="map-container w-full sm:w-1/2 h-96 shadow-lg">
        <MapContainer center={userLocation} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationUpdater userLocation={userLocation} />
          <Marker position={userLocation}>
            <Popup>Your City</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="form-container flex-1">
        <form
          onSubmit={handleSearch}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto"
        >
          <div className="mb-4 w-full h-full">
            <label
              htmlFor="textInput"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter City
            </label>
            <div className="w-full h-full flex items-center justify-center gap-5 relative">
              <input
                id="textInput"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter a city"
              />
              <button
                type="button"
                onClick={handleGetLocation}
                className="p-3 bg-indigo-600 rounded-md text-white text-sm"
              >
                Search
              </button>
              {locationError && (
                <p className="text-red-500 mt-2">{locationError}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={pickupDate}
              onChange={(e) => handleDateChange(e, setPickupDate)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              value={returnDate}
              onChange={(e) => handleDateChange(e, setReturnDate)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={`+92${phoneNumber}`}
              onChange={handleChange}
              style={{ paddingLeft: "1rem" }}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className={`w-full block text-center bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isFormValid() ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Search Available Cars
          </button>
        </form>
      </div>
    </div>
  );
};

export default BarPage;
