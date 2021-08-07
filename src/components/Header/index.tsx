import { HeaderMain } from './style';

export default function Header() {
    return (
        <HeaderMain>
            <h1>MovieApp</h1>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Genres</li>
                    <li>
                        <input type="text" placeholder="Search" />
                    </li>
                </ul>
            </nav>
        </HeaderMain>
    );
}
