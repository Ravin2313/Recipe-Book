# 📖 Recipe Book Web Application

**Recipe Book** is a full-stack web application that enables users to explore, add, and view detailed recipes with images. Built using the MERN-like stack (without React), the app provides a user-friendly interface to manage recipes stored in MongoDB.

## 🚀 Features
- View a dynamic list of recipes
- Add new recipes with title, ingredients, instructions, and images
- View detailed recipe pages

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, EJS templates
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Image Upload**: Handled via `multer`
- **Utilities**: `nodemon`, `dotenv`

## 🗂️ Project Structure
- `/controllers`: Business logic (CRUD operations)
- `/models`: Mongoose schema (`Recipe.js`)
- `/routes`: Defines HTTP routes
- `/views`: EJS templates (`index.ejs`, `addRecipe.ejs`)
- `/public`: Static assets (CSS/JS)
- `/uploads`: Stores uploaded recipe images

## 📄 Key Files
- `app.js`: Entry point. Sets up middleware, connects MongoDB, and mounts recipe routes.
- `recipeController.js`: Implements core operations (`getAllRecipes`, `createRecipe`, etc.)
- `recipeRoutes.js`: Maps URL endpoints to controller methods
- `.env`: Stores config like `PORT` and `MONGO_URI`

## 🔁 Workflow
1. Run with `npm start` or `nodemon app.js`
2. Homepage lists all recipes pulled from MongoDB
3. Use the form to add new recipes (with image upload)
4. View individual recipe details on dynamic pages

## 🌟 Future Enhancements
- User authentication
- Edit/delete functionality for recipes
- Search and filtering options
- Improved UI/UX with animations

---

This project is perfect for beginners looking to understand the integration of MongoDB, Express, and EJS in a practical CRUD-based web application.
