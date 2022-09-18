import React from 'react';
import { ImFire } from 'react-icons/im';

const Header = () => {
  return (
    <header className="h-20  w-full bg-gray-100 shadow-lg flex items-center justify-between px-8">
    <div className="flex items-center gap-2">
    <ImFire className="text-2xl text-pink-500" />
    <p className="text-xl font-semibold text-pink-500">FireShopping</p>
    </div>
    <button className="bg-sky-600 text-white py-1 px-3 rounded-full hover:bg-sky-800 transition">Login</button>
    </header>
  )
}

export default Header