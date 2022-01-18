import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/index';
import Global from './styles/global';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>
            <Global />
        </>
    );
}

export default App;
