import { HeaderMain } from './style';
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <HeaderMain>
            <h1 id="Home">CineTrending</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="Home" smooth={true} duration={1000}>
                            Home
                        </Link>
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
