import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import CommentPage from './pages/CommentsPage/CommentPage';
import NewPage from './pages/NewPage/NewPage';
import TopNewsPage from './pages/TopNewsPage/TopNewsPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to={'/top'} />}
                        ></Route>
                        <Route path="/top" element={<TopNewsPage />} />
                        <Route path="/new" element={<NewPage />}></Route>
                        <Route
                            path="/Comment"
                            element={<CommentPage />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
