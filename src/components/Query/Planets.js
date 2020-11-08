import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets');
    return res.json();
}

export default function Planets() {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);
    return (
        <div>
            <h1>Planets</h1>
            <p>{status}</p>
            {status === 'success' && data.results.map((planet, index) => (
                <p key={index}>{planet.name}</p>
            ))}
        </div>
    )
}
