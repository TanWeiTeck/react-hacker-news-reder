import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import CommentPage from './pages/CommentsPage/CommentPage';
import NewPage from './pages/NewPage/NewPage';
import TopNewsPage from './pages/TopNewsPage/TopNewsPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to={'/top'} />}></Route>
                    <Route path="/top" element={<TopNewsPage />} />
                    <Route path="/new" element={<NewPage />}></Route>
                    <Route path="/Comment" element={<CommentPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
