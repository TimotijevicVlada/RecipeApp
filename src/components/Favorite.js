
import React from "react";

const Favorite = ({ favorite, deleteItem }) => {
  
  return (
    <div className="favorite_container">
      {favorite.length === 0 ? (
        <h1 className="favorite_empty">There is no favorite food!</h1>
      ) : (
        favorite.map(item => (
            <div className="favorite_item" key={item.id}>
                <div className="image"><img src={item.info.image} alt={item.info.label} /></div>
                <div className="fav_infotext">
                  <div className="name">{item.info.label}</div>
                  <div className="makros">
                    <div className="protein">Protein: {Math.round(item.info.totalNutrients.PROCNT.quantity)} {item.info.totalNutrients.PROCNT.unit}</div>
                    <div className="carbs">Carbs: {Math.round(item.info.totalNutrients.CHOCDF.quantity)} {item.info.totalNutrients.CHOCDF.unit}</div>
                    <div className="fat">Fat: {Math.round(item.info.totalNutrients.FAT.quantity)} {item.info.totalNutrients.FAT.unit}</div>
                  </div>
                  <div className="kcal"><span>{Math.round(item.info.calories).toLocaleString()} </span>Kcal</div>
                  <div className="tweight"><span>{Math.round(item.info.totalWeight)} </span>g</div>
                  <div className="trash"><button onClick={() => deleteItem(item.id)}>Delete</button></div>
                </div>
            </div>    
       )))}
    </div>
  );
};

export default Favorite;
