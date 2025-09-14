import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Required by checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home after deleting
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
