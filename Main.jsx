import React from "react"
import ClaudeRecipe from "./components/Clauderecipe.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import {getRecipeFromChefClaude} from "./ai.js";

export default function Main() {
    const [ingredients, setIngredients]= React.useState([])

    const [recipe, setRecipe]= React.useState("")
    //represent whether or not we got the receipt back from our AIchef


    //rename from flipSetRecipeShown to getRecipe
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
         ))

    function onSubmit(formData) {
        setIngredients(previngredients=>
            [...previngredients, formData.get("ingredient")])
    }

    return (
        <main>
            <form className="ingredientMain-form" action={onSubmit}>
                <input
                    type="text"
                    placeholder="e.g oregano"
                    className="ingredientInput"
                    id="ingredientInputId"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="ingredientButton" id="ingredientButtonId">Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    propsingredientsListItems={ingredientsListItems}
                    propsingredients={ingredients}
                    propsgetRecipe={getRecipe}
                />}
            {recipe && <ClaudeRecipe propsrecipe={recipe} />}
        </main>
    )
}