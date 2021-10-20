import React from "react";

const Favorite = ({ favorite }) => {
  console.log(favorite);
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {favorite.length === 0 ? (
        <h1>There is no favorite food!</h1>
      ) : (
        favorite.map(item => (
            <div key={item.id}>
                <div style={{margin: "5px"}}><img src={item.info.image} alt={item.info.label} /></div>
            </div>    
       )))}
    </div>
  );
};

export default Favorite;
