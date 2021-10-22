import React from 'react'

const Search = ({setSearch, updateQuery}) => {
    return (
        <div className="search_wrapper">
            <div className="search_inner">
               <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your food"/>
               <button onClick={updateQuery}><i className="fas fa-search"></i></button> 
            </div>
        </div>
    )
}

export default Search;
