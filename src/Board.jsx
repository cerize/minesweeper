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
        this.props.board.state = (obj.status === 'open' && obj.face === 'bomb') ? 'lost' : 'evaluating click';
    }

    render() {
        console.log('rendering board');
        const keys = Object.keys(this.props.board.squares);
        const size = Math.sqrt(keys.length);

        return (
            <div >{
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
            </div>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object
};

export default Board;