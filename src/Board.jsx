import React, { Component, PropTypes } from 'react';
import Square from './Square';
import getInitialBoard from './getInitialBoard';

const handler = {
    get: (obj, prop) => {
        return obj[prop];
    },
    set: (obj, prop, value) => {
        console.log('inside set');
        this.handleOpen(obj, prop, value);
    }
};

const BoardRow = ({ row, board, handleLeftClick }) => {
    return (
        <div className="board-row">
            {
                row.map((elem, index) => {
                    const proxySquare = new Proxy(board[elem], handler);
                    return (
                        <div className="board-square">
                            <Square key={index} handleRightClick={handleLeftClick} square={proxySquare} />
                        </div>
                    );
                })
            }
        </div>
    );
};



class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'initial'
        };
        this.board = getInitialBoard();
    }

    _handleRightClick = (e) => {
        console.log('event', e.target.id);
        console.log('this', this);
        console.log('square clicked!');
    }

    render() {
        const keys = Object.keys(this.board);
        const size = Math.sqrt(keys.length);

        return (
            <div >{
                keys.map((i, index) => {
                    console.log(index % size);
                    return (
                    <div >
                        {
                            (index % size === 0) && 
                                <BoardRow key={index} 
                                    board={this.board} 
                                    handleRightClick={this._handleRightClick} 
                                    row={keys.slice(index, index + size)}
                                />
                        }
                    </div>

                    );
                })
            }
            </div>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object
};

BoardRow.propTypes = {
    row: PropTypes.array,
    board: PropTypes.object
};

export default Board;