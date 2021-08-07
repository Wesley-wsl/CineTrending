import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Header from '.././components/Header/index';

export default function Router() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
}
