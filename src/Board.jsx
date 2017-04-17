import React, { Component, PropTypes } from 'react';
import BoardRow from './BoardRow';

class Board extends Component {
    _handleClick = (obj) => {
        console.log('square clicked!', obj);
        if (obj.status === 'flag') {
            this.props.board.nBombs -= 1;
        }
        if (obj.status === 'closed') {
            this.props.board.nBombs += 1;
        }
        if (obj.status === 'open' && obj.face === 'bomb') {
            this._openAllBombs(this.props.board.squares);
            this.props.board.state = 'lost';
        } else {
            this.props.board.state = 'evaluating click';
        }
        if (this._checkVictory(this.props.board.squares)) {
            this.props.board.state = 'win';
        }
    }

    _openAllBombs = (squares) => {
        for (const element in squares) {
            const obj = squares[element];
            if (obj.face === 'bomb') {
                obj.status = 'open';
            }
        }
    }

    _checkVictory = (squares) => {
        let allBombsFlaged = true;
        let allNoBombsOpened = true;
        for (const element in squares) {
            const obj = squares[element];
            if (obj.face === 'bomb' && obj.status !== 'flag') {
                allBombsFlaged = false;
            }
            if (obj.face !== 'bomb' && obj.status === 'closed') {
                allNoBombsOpened = false;
            }
        }
        return allBombsFlaged || allNoBombsOpened;
    }

    render() {
        console.log('rendering board');
        const keys = Object.keys(this.props.board.squares);
        const size = Math.sqrt(keys.length);

        return (
            <div className="board">
            {
                keys.map((i, index) => {
                    return (
                    <div >
                        {
                            (index % size === 0) && 
                                <BoardRow key={index} 
                                    board={this.props.board} 
                                    handleClick={this._handleClick} 
                                    row={keys.slice(index, index + size)}
                                />
                        }
                    </div>

                    );
                })
            }
            {
               (this.props.board.state === 'lost') &&
               <div>LOST!!!</div>
            }
            {
               (this.props.board.state === 'win') &&
               <div>WIN!!!</div>
            }
            </div>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object
};

export default Board;