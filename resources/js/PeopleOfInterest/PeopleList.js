import React, { useEffect, useState } from 'react'

export default function PeopleList({ search_term }) {

    const [data, setData] = useState([]);

    const loadData = async () => {
        // console.log('Loading people for search term', search_term)

        const url = '/api/request?search=' + encodeURIComponent(search_term);

        const response = await fetch (url);
        const data = await response.json();

        setData(data);
    }

    useEffect(() => {

        loadData();

    }, [search_term]);

  return (
      <div className="people-of-interest__list">
          
        <ul>

            {
                data.map(person => (

                    <li key={person.id} className="people-of-interest__person">
                        {person.name}
                    </li>

                ))
            }

        </ul>

    </div>
  )
}