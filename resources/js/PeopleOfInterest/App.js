import React, { useState } from 'react';
import PeopleList from './PeopleList';
import SearchInput from './Searchinput';
import StatusFilter from './StatusFilter';
 
export default function App() {

    const [search_term, setSearchTerm] = useState('');
    const [selected_status, setSelectedStatus] = useState('');

    return (
        <div className="people-of-interest">
            <h1>People of ineterest</h1>

            <SearchInput 
                search_term={ search_term}
                setSearchTerm={ setSearchTerm}
            />

            <StatusFilter
                setSelectedStatus={ setSelectedStatus}
            />

            <PeopleList 
                search_term={ search_term} 
                selected_status={ selected_status}
            />

            
        </div>
    )
}