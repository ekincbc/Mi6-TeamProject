import React from 'react';

export default function SearchInput({ search_term, setSearchTerm}) {

    const onInputChange = event => {
        setSearchTerm(event.target.value)
    }
    
    return (
        <div className="people-of-interest__search">
            <label htmlFor="">Search: </label>
            <input type="search" 
            value={ search_term } 
            placeholder="Search by person name..." 
            onChange={ onInputChange}/>
        </div>
    )
}