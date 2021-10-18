import React from 'react'

const Search = ({setSearch, updateQuery}) => {
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" />
            <button onClick={updateQuery}>Search</button>
        </div>
    )
}

export default Search;
