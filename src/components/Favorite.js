import React from "react";

const Favorite = ({ favorite }) => {
  console.log(favorite);
  return (
    <div className="favorite_container">
      {favorite.length === 0 ? (
        <h1 className="favorite_empty">There is no favorite food!</h1>
      ) : (
        favorite.map(item => (
            <div className="favorite_item" key={item.id}>
                <div className="image"><img src={item.info.image} alt={item.info.label} /></div>
                <div className="name">{item.info.label}</div>
                <div><a href={item.info.url}>URL</a></div>
                <div className="kcal">{Math.round(item.info.calories).toLocaleString()}Kcal</div>
                <div className="trash"><i className="fas fa-trash"></i></div>
            </div>    
       )))}
    </div>
  );
};

export default Favorite;
