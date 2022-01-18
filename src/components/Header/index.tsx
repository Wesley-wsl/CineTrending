import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { NavMobile } from './NavMobile';
import { HeaderMain } from './style';

export default function Header() {
    return (
        <HeaderMain>
            <h1 id="Home">
                <NavLink to="/">CineTrending</NavLink>
            </h1>

            <NavMobile />
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
        </HeaderMain>
    );
}
