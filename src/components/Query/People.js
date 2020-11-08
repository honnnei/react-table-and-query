import React from 'react';
import { useQuery } from 'react-query';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people');
    return res.json();
}

export default function People() {
    const { data, status } = useQuery('people', fetchPeople);

    return (
        <div>
            <h1>People</h1>
            <p>{status}</p>
            {status === 'success' && data.results.map((person, index) => (
                <p key={index}>{person.name}</p>
            ))}
        </div>
    )
}
