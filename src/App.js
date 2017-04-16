import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Game from './Game';

class App extends Component {
    render() {
        return (  
            <Router>
                <div className="App">
                    <div className="App-header">
                        <h2>Meta Minesweeper</h2>
                    </div>
                    <Route exact path="/" component={Game} />
                    <Route path="/:id" component={Game} />

                </div>
                
            </Router>
        );
    }
}

export default App;
