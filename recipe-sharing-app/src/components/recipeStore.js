import create from "zustand";

const useRecipeStore = create((set) => ({
  // Recipes
  recipes: [],
  filteredRecipes: [],

  // Search term
  searchTerm: "",

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),

  // Set initial recipes (if needed)
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== recipeId),
    })),

  // Set search term & filter recipes dynamically
  setSearchTerm: (term) =>
    set((state) => {
      const lowerTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((r) =>
          r.title.toLowerCase().includes(lowerTerm)
        ),
      };
    }),
}));

export default useRecipeStore;
