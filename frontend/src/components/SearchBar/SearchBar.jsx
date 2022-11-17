import React, { useState } from 'react';
import './SearchBar.css'



const SearchBar = ({setSelectedVideo}) => {

    const [criteria, setCriteria] = useState('')
    const handleChange = e => setCriteria(e.target.value)

    function handleSubmit(e) {
        e.preventDefault();
        setSelectedVideo(criteria)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-bar" type='text' placeholder="Search here..." value={criteria} onChange={handleChange}/>
            <button className="search-button">Search</button>
        </form>
          );
}
 
export default SearchBar;