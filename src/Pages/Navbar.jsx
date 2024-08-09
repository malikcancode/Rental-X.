import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="w-full h-full text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center px-4 justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap px-4 logo">
            Rental X.
          </span>
        </Link>
        <div className="flex gap-3 md:order-2">
          {isAuthenticated ? (
            <button
              onClick={logout}
              type="button"
              className="bg-orange-600 text-white tracking-wider font-medium text-sm px-4 py-2 text-center rounded-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              type="button"
              className="bg-orange-600 text-white tracking-wider font-medium text-sm px-4 py-2 text-center rounded-sm"
            >
              Login
            </Link>
          )}
          <Link
            to="/cart"
            type="button"
            className="bg-orange-600 text-white tracking-wider font-medium text-sm px-4 py-2 text-center rounded-sm"
          >
            <i className="ri-store-2-line"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
