import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import SignUpSignIn from './components/SignUpSignIn';
import Integration from './components/Integration';
import Contact from './components/Contact';
import Form from './components/Form';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/signup" element={<SignUpSignIn />} />
                        <Route path="/integration" element={<Integration />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/form" element={<Form />} />
                    </Routes>
                </main>
                <footer>
                    
                </footer>
            </div>
        </Router>
    );
}

export default App;
