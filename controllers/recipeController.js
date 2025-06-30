const Recipe = require("../models/Recipe");

// Add new recipe
exports.addRecipe = async (req, res) => {
  try {
    const { name, ingredients, steps } = req.body;
    const image = req.file ? req.file.path : null;

    if (!name || !ingredients || !steps || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const recipe = new Recipe({
      name,
      ingredients,
      steps,
      image,
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.error("❌ Error adding recipe:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all recipes (with optional search)
exports.getRecipes = async (req, res) => {
  try {
    const search = req.query.search || "";
    const regex = new RegExp(search, "i");

    const recipes = await Recipe.find({
      $or: [{ name: regex }, { ingredients: regex }],
    });

    res.json(recipes);
  } catch (error) {
    console.error("❌ Error fetching recipes:", error);
    res.status(500).json({ message: "Server error" });
  }
};
