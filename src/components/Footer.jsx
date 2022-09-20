import React, { useContext } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillCartFill } from 'react-icons/bs'
import { AppContext } from "../App";

const Footer = () => {

const { setRoute } = useContext(AppContext);

  return (
    <div>
      <footer className="fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center">
        <div 
        className="bg-sky-200 p-2 rounded-full text-3xl text-sky-600 cursor-pointer"
        onClick={() => setRoute("home")}
        >
          <IoHomeSharp />
        </div>
        <div 
        className="bg-sky-200 p-2 rounded-full text-3xl text-sky-600 cursor-pointer"
        onClick={() => setRoute("shopping")}
        >
          <BsFillCartFill />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
