import React, { useState } from 'react';
import './SearchBar.css'



const SearchBar = ({}) => {

    const [criteria, setCriteria] = useState('')
    const handleChange = e => setCriteria(e.target.value)

    return (
        <form>
            <input className="search-bar" type='text' placeholder="Search here..." value={criteria} onChange={handleChange}/>
        </form>
          );
}
 
export default SearchBar;