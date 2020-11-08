import React, { useState } from 'react';
import Navbar from './Navbar';
import Planets from './Planets';
import People from './People';

export default function Query() {
    const [page, setPage] = useState('planets');

    return (
        <div>
            <Navbar setPage={setPage} />
            {page === "planets" ? <Planets /> : <People />}
        </div>
    )
}
