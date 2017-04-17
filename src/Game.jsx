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
        const { match } = this.props;
        const gameHandler = {
            set: (obj, prop, value) => {
                console.log('inside set from board');
                obj[prop] = value;
                // even if the new value is the same as previous, still rerenders
                this.forceUpdate();
                
                return true;
            }
        };
        const proxyBoard = new Proxy(board, gameHandler);

        return (
            <div className="game">

                <div className="change-mode">
                    {
                        match.params.id !== 'dev' ? 
                            <Link to="/dev">Go to Dev mode</Link> :
                            <Link to="/">Go to Normal mode</Link> 
                    }
                </div>
                
              <button onClick={() => { window.location.reload(); }}>Get a new board</button>
                {
                 
                <div className="bomb-counter">Bombs: {proxyBoard.nBombs}</div>
                }


              <Board board={proxyBoard} mode={match.params.id} />
            </div>
        );
    }
}

Game.propTypes = {
    match: PropTypes.object
};

export default Game;