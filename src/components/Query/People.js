import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import { Button } from 'reactstrap';

const fetchPeople = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    return res.json();
}

export default function People() {
    const [page, setPage] = useState(1);
    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['people', page], fetchPeople);

    return (
        <div>
            <h1>People</h1>
            <Button outline color="info" onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>Previous Page</Button>
            <Button outline color="info" onClick={() => setPage(prevPage => prevPage + 1)} disabled={page >= 6}>Next Page</Button>
            <p>{status}</p>
            {status === 'success' && resolvedData.results.map((planet, index) => (
                <p key={index}>{planet.name}</p>
            ))}
        </div>
    )
}
