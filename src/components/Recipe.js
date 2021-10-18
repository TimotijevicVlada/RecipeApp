import React from 'react';

const Recipe = ({ food, details }) => {
    return (
        <div className="repice_container">
            {!food ? <h1>There is no available recipe</h1> : food.map(item => (
                <div className="recipe_item" key={item.recipe.calories}>
                    <h2 className="recipe_title">{item.recipe.label}</h2>
                    <img className="recipe_image" src={item.recipe.image} alt={item.recipe.label} />
                    <div className="recipe_info">
                        <p className="recipe_Kcal">{Math.round(item.recipe.calories)} Kcal</p>
                        <button className="ingradients" onClick={() => details(item.recipe.label)}>Ingredients</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Recipe;
