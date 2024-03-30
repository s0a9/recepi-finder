import React from "react";
import { CookingPot } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around md:justify-between px-0 md:px-20 bg-stone-900 py-6">
      <div className="flex gap-1 items-center">
        <h2 className="text-2xl font-bold text-white">
          Find<span className="text-yellow-500">Recipe</span>
        </h2>
        <CookingPot color="#eab308" size={26} fontWeight={500} />
      </div>
      <ul className="flex justify-between items-center gap-6 text-white text-lg md:mr-8">
        <li>
          <NavLink to="/" className="transition-colors">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className="transition-colors">
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
