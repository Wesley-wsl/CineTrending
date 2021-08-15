import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { NavStyle } from './style';

export function NavMobile() {
    const [open, setOpen] = useState(false);

    return (
        <NavStyle open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <Link to="Movies" smooth={true} duration={900}>
                            Top Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="TVs" smooth={true} duration={900}>
                            Top TVs
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavStyle>
    );
}
