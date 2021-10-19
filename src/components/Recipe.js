import React from 'react';
import {Link} from "react-router-dom";

const Recipe = ({ food, viewItem }) => {
    return (
        <div className="recipe_container">
            {!food ? <h1>There is no available recipe</h1> : food.map(item => (
                <div className="recipe_item" key={item.recipe.calories}>
                    <h4 className="recipe_title">{item.recipe.label.length > 20 ? item.recipe.label.slice(0, 20) + "..." : item.recipe.label}</h4>
                    <img className="recipe_image" src={item.recipe.image} alt={item.recipe.label} />
                    <div className="recipe_info">
                        <p className="recipe_Kcal">{Math.round(item.recipe.calories)} Kcal</p>
                        <Link to={`/ingredients`}>
                            <button className="ingradients" onClick={() => viewItem(item.recipe.label)}>Ingredients</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Recipe;
