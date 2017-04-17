import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Game from './Game';

const App = () => {
    return (  
        <Router>
            <div className="app">
                <div className="app-header">
                    <h2>Meta Minesweeper</h2>
                </div>
                <Route exact path="/" component={Game} />
                <Route path="/:id" component={Game} />
            </div>
        </Router>
    );
};

export default App;
