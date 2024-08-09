import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-start w-full h-full">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-white bg-blue-600 hover:bg-blue-700 p-2 px-8 rounded-md 
        sm:ml-14 ml-3"
      >
        <i className="ri-arrow-left-fill"></i> Back
      </button>
    </div>
  );
}

export default BackButton;
