import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { dataRoute } from './DataRoute';

export default function AppRoute(){
    return(
        <Router>
            <Routes>
                {dataRoute.map((route, index) => {
                    return <Route key={index} path={route.path} element={route.element} />
                })}
            </Routes>
        </Router>
    );
}