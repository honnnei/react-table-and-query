import React from 'react';
import { Navbar, Button } from 'reactstrap';

export default function NavbarComponent({ setPage }) {
    return (
        <div>
            <Navbar>
                <Button onClick={() => setPage('planets')}>Planets</Button>
                <Button onClick={() => setPage('people')}>People</Button>
            </Navbar>

        </div>
    )
}
