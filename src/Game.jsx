import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import getInitialBoard from './getInitialBoard';
import Board from './Board';

const board = getInitialBoard(7);

class Game extends Component {
    render() {
        const { match } = this.props;
        const gameHandler = {
            set: (obj, prop, value) => {
                obj[prop] = value;
                // even if the new value is the same as previous, still rerenders
                // necessary because React won't see changes in deep nested props
                this.forceUpdate();
                return true;
            }
        };
        const proxyBoard = new Proxy(board, gameHandler);

        return (
            <div className="game">
                <div >
                    <button className="new-board" onClick={() => { window.location.reload(); }}>Get a new board</button>
                    <div className="change-mode">
                        {
                            match.params.id !== 'dev' ? 
                                <Link to="/dev">Go to Dev mode</Link> :
                                <Link to="/">Go to Normal mode</Link> 
                        }
                    </div>
                </div>
                <div className="board-panel">
                    <div className="top-menu">
                        {
                            <div className="bomb-counter">Bombs: {proxyBoard.nBombs}</div>
                        }
                        {
                            (proxyBoard.state === 'lost') &&
                            <div className="lost-message">Too bad!!!</div>
                        }
                        {
                            (proxyBoard.state === 'win') &&
                            <div className="win-message">Well done!!</div>
                        }
                    </div>
                    <Board board={proxyBoard} mode={match.params.id} />
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    match: PropTypes.object
};

export default Game;