import { Route, Routes } from 'react-router-dom';

import Details from '../pages/Details/index';
import DetailsTV from '../pages/DetailsTV';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/details/tv/:id" element={<DetailsTV />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
