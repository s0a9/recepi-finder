import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Home({ rec, setRec, handleSubmit }) {
  return (
    <div className="p-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold text-neutral-800">
            Unlock Flavorful Creations
            <span className="block mt-6">Your Recipe Navigator.</span>
          </h1>
          <p className="text-neutral-700 ml-2">
            Over 10,000+ food recipes from all around the world
            <span className="block">you can try, Start cooking now</span>
          </p>
          <form
            onSubmit={handleSubmit}
            action="/recipes"
            className="flex gap-3 ml-2 pt-8"
          >
            <Link
              to="/recipes"
              className="bg-yellow-500 px-4 rounded flex justify-center items-center"
            >
              Get Started!
            </Link>
            <input
              type="text"
              placeholder="Search recipes"
              value={rec}
              onChange={(e) => setRec(e.target.value)}
              alt="recipe-search"
              className="bg-yellow-200 px-3 py-2 rounded focus:ring ring-neutral-700 outline-none placeholder:text-neutral-600"
            />
            <button type="submit" className="bg-yellow-200 px-2 rounded">
              <Search />
            </button>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src="/src/Assets/back-hro.png" alt="hero" className="w" />
        </div>
      </div>
    </div>
  );
}
export default Home;
