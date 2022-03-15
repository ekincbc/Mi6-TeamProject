import axios from 'axios';
import React, { useState } from 'react';

export default function MissionEditForm() {

    const [values, setValues] = useState(
        {
            name: '',
            year: 2022,
            outcome: 'planed'
        }
    )

    const handleChange = (event) => {
        setValues(
            previous_values => {
                return (
                    {
                        ...previous_values, 
                        [event.target.name]: event.target.value
                    });
            });
    }

    const handleSubmit = async event => {
        event.preventDefault();

    const meta_tag = document.querySelector('meta[name="csrf-token"]');
    const csrf_value = meta_tag.getAttribute('content');

        // fetch
    const reponse = await fetch('/api/missions', {
            method: 'post',
            body: JSON.stringify(values)
        })

        //axios
    const axios_response = await axios.post('/api/missions', values);
    }

    const years = [];
    for (let year = 1900; year <= 2030; year++) {
        years.push(year);
    }

    return (

        <form 
        className='edit-mission'
        action=""
        method="post"
        onSubmit={ handleSubmit}
        >
        <br/>

        <div className='form-group'>
            <label>Name</label><br/>
            <input
                type="text" 
                name="name" 
                value={ values.name}
                onChange={ handleChange} 
            />
        </div>

        <div className='form-group'>
            <label>Year</label><br/>
            <select 
                name="year"
                value={ values.year}
                onChange={ handleChange}
            >
            {
                years.map(year=> (
                <option key={ year } 
                        value={ year }>{ year }</option>
                ))
            }
            </select>
        </div>

        <div className='form-group'>
            <label>Outcome</label><br/>
            <select>
                <option value="planned">Planned</option>
                <option value="in-progress">In progress</option>
                <option value="success">Success</option>
                <option value="failure">Failure</option>
                <option value="delayed">Delayed</option>
            </select>
        </div>
        <br/>
        <div className='form-group'>
            <button>Save</button>
        </div>

        </form>
    )
}
