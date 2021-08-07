import { HeaderMain } from './style';

export default function Header() {
    return (
        <HeaderMain>
            <h1>MovieApp</h1>

            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Genres</a>
                    </li>
                    <li>
                        {/* <input type="text" placeholder="Search" /> */}
                        <i className="fas fa-search"></i>
                    </li>
                </ul>
            </nav>
        </HeaderMain>
    );
}
