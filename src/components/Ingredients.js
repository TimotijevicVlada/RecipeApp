import React from "react";

const Ingredients = ({ details, setFavorite, favorite, setTotalFav, totalFav }) => {
  console.log(favorite)

  const addToFavorite = (item) => {
      if(totalFav < 1) {
        const newFav = [
          ...favorite, 
          {id: item.calories, info: item}
        ]
        setFavorite(newFav);
        setTotalFav(newFav.length);
      } else {
        for(let i in favorite) {
          if(item.label === favorite[i].info.label) {
            alert("This product is already in the favorite!");
            return;
          } else {
            const newFav = [
              ...favorite, 
              {id: item.calories, info: item}
            ]
            setFavorite(newFav);
            setTotalFav(newFav.length);
          }
        }
      }
  }


  return (
    <div className="details_container">
      {details.map((item) => (
        <div className="details_wrapper" key={item.recipe.label}>
          <div className="details_title">
            <h2>{item.recipe.label}</h2>
          </div>
          <div className="details_info">
            <div className="details_image">
              <img src={item.recipe.image} alt={item.recipe.label} />
              <div className="add_to_fav">
                <button onClick={() => addToFavorite(item.recipe)}>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
            <div className="details_desc">
              <h4>Ingredients</h4>
              {item.recipe.ingredients.map((item) => (
                <div className="details_ingr" key={item.foodId}>
                  <div>{item.text}</div>
                </div>
              ))}
              <h4>Makronutrients</h4>
              <div className="details_makros">
                <div className="makros">
                  <div className="makros_quantity green">
                    <span>
                      {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
                    </span>
                    {item.recipe.totalNutrients.PROCNT.unit}
                  </div>
                  <div className="makros_name">PROTEIN</div>
                </div>
                <div className="makros">
                  <div className="makros_quantity orange">
                    <span>
                      {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
                    </span>
                    {item.recipe.totalNutrients.CHOCDF.unit}
                  </div>
                  <div className="makros_name">CARBS</div>
                </div>
                <div className="makros">
                  <div className="makros_quantity red">
                    <span>
                      {Math.round(item.recipe.totalNutrients.FAT.quantity)}
                    </span>
                    {item.recipe.totalNutrients.FAT.unit}
                  </div>
                  <div className="makros_name">FAT</div>
                </div>
              </div>
              <div className="details_total">
                <div className="total">
                  Total weight:{" "}
                  <span>{Math.round(item.recipe.totalWeight)}</span>g
                </div>
                <div className="total">
                  Total calories:{" "}
                  <span>{Math.round(item.recipe.calories)}</span>Kcal
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
