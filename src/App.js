import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Game from './Game';




class App extends Component {
    render() {
        return (  
            <Router className="App">
                <div>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Meta Minesweeper</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
            
                    
                    
               

                    <Route exact path="/" component={Game} />
                    <Route path="/:id" component={Game} />

                </div>
                
            </Router>
        );
    }
}

export default App;
