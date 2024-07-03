import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Comic from './components/Comic';
import Footer from './components/Footer';
import './styles/styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/comic" element={<ComicPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <About />
            <Skills />
            <section id="comic">
                <h3>Comic of the Day</h3>
                <Link to="/comic">Read the comic</Link>
            </section>
        </div>
    );
};

const ComicPage: React.FC = () => {
    return (
        <div>
            <Comic />
        </div>
    );
};

export default App;
