const API_URL = "/api/recipes"; // Relative path works since we serve from same domain

// Load all recipes on page load
document.addEventListener("DOMContentLoaded", () => {
  loadRecipes();
});

// Form submit
const form = document.getElementById("recipeForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Recipe submission failed.");

    const result = await res.json();
    console.log("✅ Recipe added:", result);
    alert("Recipe added successfully!");

    form.reset();
    loadRecipes();
  } catch (err) {
    console.error("❌ Error adding recipe:", err);
    alert("Failed to add recipe. Try again.");
  }
});

// Search recipes
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  loadRecipes(query);
});

// Load and display recipes
async function loadRecipes(query = "") {
  try {
    const res = await fetch(`${API_URL}?search=${query}`);
    const recipes = await res.json();
    displayRecipes(recipes);
  } catch (err) {
    console.error("❌ Failed to fetch recipes:", err);
    document.getElementById("recipeCards").innerHTML = `
      <p style="text-align:center; color:#D62828;">Error loading recipes.</p>`;
  }
}

// Display cards
function displayRecipes(recipes) {
  const container = document.getElementById("recipeCards");
  container.innerHTML = "";

  if (!recipes.length) {
    container.innerHTML = `<p style="text-align:center; color:#999;">No recipes found.</p>`;
    return;
  }

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="/${recipe.image}" alt="${recipe.name}" />
      <div class="card-content">
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
      </div>
    `;

    container.appendChild(card);
  });
}
