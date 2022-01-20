import { HashRouter } from 'react-router-dom';

import Routes from './routes/index';
import Global from './styles/global';

function App() {
    return (
        <>
            <HashRouter>
                <Routes />
            </HashRouter>
            <Global />
        </>
    );
}

export default App;
