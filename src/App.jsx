import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { RouterProvider, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/page";
import Recipe from "./Pages/Recipes/page";
import RecipeDetails from "./Pages/RecipeDetails/page";

function App() {
  const [rec, setRec] = useState("");
  const [foods, setfoods] = useState([]);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (rec) navigate("/recipes");
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home rec={rec} setRec={setRec} handleSubmit={handleSubmit} />
          }
        />
        <Route
          path="/recipes"
          element={
            <Recipe
              foods={foods}
              setfoods={setfoods}
              rec={rec}
              setRec={setRec}
            />
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails foods={foods} />} />
      </Routes>
    </>
  );
}

export default App;
