import React from 'react';
import { Navbar, Button } from 'reactstrap';

export default function NavbarComponent({ setPage }) {
    return (
        <div>
            <Navbar>
                <Button outline color="info" onClick={() => setPage('planets')}>Planets</Button>
                <Button outline color="info" onClick={() => setPage('people')}>People</Button>
            </Navbar>

        </div>
    )
}
