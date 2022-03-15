import React, { useEffect, useState } from 'react';

export default function StatusFilter({ setSelectedStatus}) {

    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const url = 'api/status';
        const response = await fetch(url);
        const data = await response.json();
        setStatuses(data);
        
    }

    useEffect(() => {
        // do this when the comment mounts
        loadStatuses();

    }, []);

    return (
        <div className='status-filter__status'>
            {
                statuses.map(status => (
                    <button key={ status.id }
                    onClick={ () => setSelectedStatus(status.id) }
                    >
                        { status.name }
                    </button>
                ))
            }
        </div>
    )
}

