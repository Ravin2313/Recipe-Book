const express = require("express");
const multer = require("multer");
const path = require("path");
const { addRecipe, getRecipes } = require("../controllers/recipeController");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), addRecipe);
router.get("/", getRecipes);

module.exports = router;
