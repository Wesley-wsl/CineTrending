import Global from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <Global />
        </>
    );
}

export default App;
