## Recipe Manager Tracker
*By Ethar Almaghrabi*

**Links**
*Github Repository:* https://github.com/ethar615/RecipeManagerTracker.git 

CSS used by this and edited by me: https://startbootstrap.com/theme/business-casual#google_vignette

Confirm deletion button: https://www.w3schools.com/js/js_popup.asp 

Link to website: https://recipemanagertracker.onrender.com

Notes: 
1. To run this program you need to create a mongoDB and collection in your local machine
MongoDB details:
Database Name: RecipeLib
Collection name: Cooking_recipes
 
2. To run from visual studio: Go to the Terminal and run this command --> nodemon .\server.js
-----------------------------
Project Description:
Welcome to the Recipe Manager Tracker Web Application! This project aims to provide a platform for users to create, view, update, and delete recipes in a simple and fast way. This README outlines the key features, structure, and how to use the application.
Features
1. Landing Page: 
**URLs:**
    Home: http://localhost:3000/
    Recipe List: http://localhost:3000/recipeslist
**Elements:**
Title and Description: Displays "Welcome to Recipe Manager" with a brief description.
Buttons:
    - "View Recipes" to see all saved recipes.
    - "Add New Recipe" to create a new recipe entry.
UI: The splash page uses a visually appealing background image with centered buttons.

2. CRUD Functionality
Create: users can add new recipes with the following details:
    - Recipe Name
    - Category (e.g., breakfast, lunch, dinner)
    - Preparation Time
    - Calories
    - Ingredients

Read: Users can view a list of all existing recipes in a table format.
    Each entry includes buttons for editing or deleting the recipe.

Update: can edit recipe details by clicking the "Edit" button.
Delete: can delete a recipe using a stylish confirmation modal that appears when clicking the "Delete" button.

3. Enhanced UI/UX:
The user interface has been enhanced for a polished look and better usability.
Centered Layout: At the landing page, Add and Edit recipe forms are centered for better user interaction which gives the home page a splash layout.
The application follows a consistent design pattern using Bootstrap's styling framework.
