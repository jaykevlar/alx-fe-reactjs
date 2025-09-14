import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper component to pass recipe ID param
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
