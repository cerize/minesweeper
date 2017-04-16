import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import getInitialBoard from './getInitialBoard';
import Board from './Board';

const board = getInitialBoard(5);

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: board.status
        };
    }
    render() {
        console.log('rerendering game');
        console.log('props match', this.props.match);
        const handler = {
            set: (obj, prop, value) => {
                console.log('inside set from board');
                obj[prop] = value;
                this.setState((prevState, props) => {
                    return { 
                        status: value
                    };
                });
                
                return true;
            }
        };
        const proxyBoard = new Proxy(board, handler);

        return (
            <div className="Game">
                {
                    this.props.match.params.id !== 'dev' &&
                     <ul>

                       
                        <li><Link to="/dev">Dev</Link></li>
                    </ul>
                }
              <button onClick={() => { window.location.reload(); }}>Get a new board</button>
              <div>Bombs: {proxyBoard.nBombs}</div>
              <div>Mode: {`${this.props.match.params.id}`}</div>
              <Board board={proxyBoard} />
            </div>
        );
    }
}

Game.propTypes = {
    match: PropTypes.object
};

export default Game;