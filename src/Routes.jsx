import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet,
} from 'react-router-dom';
import { navItems } from './components/Header/Header';

import AppLayout from './components/AppLayout/AppLayout';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsCommentPage from './pages/NewsCommentPage/NewsCommentPage';
import './App.css';

export const HackerNewsRoutes = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <AppLayout>
                                <Outlet />
                            </AppLayout>
                        }
                    >
                        <Route
                            path={'/'}
                            element={<Navigate to={'/top'} />}
                        ></Route>
                        {navItems.map((item) => (
                            <Route
                                key={item.type}
                                path={item.type}
                                elemnt={<Outlet />}
                            >
                                <Route
                                    index
                                    element={<NewsPage type={item.type} />}
                                />
                                <Route
                                    path="newscomment/:id"
                                    element={<NewsCommentPage />}
                                />
                            </Route>
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
