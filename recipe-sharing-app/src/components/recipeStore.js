import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Replace the recipes array entirely
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
