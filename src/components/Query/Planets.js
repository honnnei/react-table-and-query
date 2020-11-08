import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'reactstrap';

const fetchPlanets = async (key, greeting, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

export default function Planets() {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['planets', 'hello', page], fetchPlanets);
    console.log(data);
    return (
        <div>
            <h1>Planets</h1>
            <Button outline color="info" onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1 ? true : false}>Previous Page</Button>
            <Button outline color="info" onClick={() => setPage(prevPage => prevPage + 1)} disabled={page >= 6 ? true : false}>Next Page</Button>
            <p>{status}</p>
            {status === 'success' && data.results.map((planet, index) => (
                <p key={index}>{planet.name}</p>
            ))}
        </div>
    )
}
