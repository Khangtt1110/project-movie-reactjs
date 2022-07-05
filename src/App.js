import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/page/Home';
import Movie from '~/page/Movie';
import Login from './page/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
