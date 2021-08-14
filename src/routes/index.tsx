import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Header from '.././components/Header/index';
import Footer from '../components/Footer/index';
import Details from '../pages/Details/index';
import DetailsTV from '../pages/DetailsTV';
import NotFound from '../pages/NotFound';

export default function Router() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id" exact component={Details} />
                <Route path="/details/tv/:id" exact component={DetailsTV} />
                <Route path="*" exact component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
}
