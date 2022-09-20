import React, { useContext } from "react";
import { ImFire } from "react-icons/im";
import { AppContext } from "../App";
import { getAuth, signOut } from 'firebase/auth';
import toast from "react-hot-toast";

const auth = getAuth();

const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext);
  const doLogout = () => {
    signOut(auth)
    .then(() => {
        setRoute("login");
        setUser(null);
        toast("Successfully logout")
    })
    .catch((e) => console.error(e));
  }

  return (
    <header className="h-20  w-full bg-gray-100 shadow-lg flex items-center justify-between px-8">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <ImFire className="text-2xl text-pink-500" />
        <p className="text-xl font-semibold text-pink-500 hover:text-pink-700">
          FireShopping
        </p>
      </div>
      <div className="flex gap-2">
        {user ? (
          <button onClick={doLogout} className="bg-sky-600 text-white py-1 px-3 rounded-full hover:bg-sky-800 transition">
            Logout
          </button>
        ) : (
          <button
            className="bg-sky-600 text-white py-1 px-3 rounded-full hover:bg-sky-800 transition"
            onClick={() => setRoute("login")}
          >
            Login
          </button>
        )}
        <button
          className="bg-sky-600 text-white py-1 px-3 rounded-full hover:bg-sky-800 transition"
          onClick={() => setRoute("register")}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
