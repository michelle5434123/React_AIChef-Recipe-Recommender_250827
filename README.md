# 👩🏻‍🍳 React_AIChef-Recipe-Recommender_250827
Chef Claude is an interactive React application that helps you generate recipes based on the ingredients you have on hand. Powered by Anthropic’s Claude API, the app suggests creative recipes in Markdown format, rendered beautifully in the UI.
![image](https://github.com/user-attachments/assets/840f999f-c091-468e-8d90-a30409c6cfad)



## Features
- AI-Powered Recipe Suggestions: Uses Anthropic’s Claude model to suggest a complete recipe.
- Markdown Recipe Rendering: Recipes are displayed with proper formatting using react-markdown.
- Dynamic UI Updates: Ingredients and recipes update live without refreshing the page.
- Accessibility Considerations: Includes ARIA labels and aria-live regions for better screen reader support.



## How It Works
- User enters ingredients via the input form.
- Once at least 4 ingredients are added, a “Get a recipe” button appears.
- On click, the app sends the ingredient list to the Claude API using your API key.
- Claude responds with a recipe in Markdown.
- The recipe is displayed dynamically in the app with headings, lists, and formatting.


## Project Structure
```bash
src/
 ├─ App.jsx
 ├─ Main.jsx
 ├─ ai.js
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ IngredientsList.jsx
 │   └─ Clauderecipe.jsx
 ├─ image/
 │   └─ chefIcon.png
.env(create your own with your AI API)
```


## Notes
- ⚠️ This project uses an environment variable to store your Anthropic API key. After cloning the repo, you must create a new `.env` file in the root directory with the contents of `VITE_ANTHROPIC_API_KEY=your_api_key_here` and replace the placeholder with your real API key
- For development, Vite automatically loads variables starting with `VITE_`.
- To deploy securely:
  - Build a backend endpoint (`/api/recipes`) that holds the key.
  - Frontend fetches from backend instead of sending requests directly.


## How to Run This Project Locally
These instructions assume you have **Node.js** and **npm** installed on your computer. If not, download them from [nodejs.org](https://nodejs.org/).

### 1. Clone or Download the Repo
Click on the green **Code** button and choose **Download ZIP** or use Git:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies:
Make sure react, react-dom, and vite are included in your package.json
```bash
npm install
```
### 3. Configure environment variables
Create a `.env` file in the project root (don’t commit this file):
```bash
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxx
```
Replace with your Anthropic API key.

### 4. Start the Development Server
If you’re using Vite (recommended for this setup):
```bash
npm run dev
```
This will start the server and Open the link in your browser.


