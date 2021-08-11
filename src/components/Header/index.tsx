import { HeaderMain } from './style';

export default function Header() {
    return (
        <HeaderMain>
            <h1>CineTrending</h1>

            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#Movies">Top Movies</a>
                    </li>
                    <li>
                        <a href="#TVs">Top TVs</a>
                    </li>
                </ul>
            </nav>
        </HeaderMain>
    );
}
