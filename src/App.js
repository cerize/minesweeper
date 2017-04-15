import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import getInitialBoard from './getInitialBoard';

const board = getInitialBoard(5);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: board.status
        };
    }
    render() {
        const handler = {
            set: (obj, prop, value) => {
                console.log('inside set from board');
                obj[prop] = value;
                // this.forceUpdate();
                this.setState((prevState, props) => {
                    return { 
                        status: value
                    };
                });
                
                return true;
            }
        };
        const proxyBoard = new Proxy(board, handler);
        console.log('rerendering app');
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Minesweeper</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={() => { window.location.reload(); }}>Get a new board</button>
              <Board board={proxyBoard} />
            </div>
        );
    }
}

export default App;
