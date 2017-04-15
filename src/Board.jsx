import React, { Component, PropTypes } from 'react';
import BoardRow from './BoardRow';






class Board extends Component {
    _handleLeftClick = (obj) => {
        // console.log('event', e.target.id);
        console.log('square clicked!');
        this.props.board.state = obj.face === 'bomb' ? 'lost' : 'evaluating click';
    }

    render() {
        console.log('rendering board');
        console.log('board', this.props.board);
        const keys = Object.keys(this.props.board.squares);
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
                                    board={this.props.board} 
                                    handleLeftClick={this._handleLeftClick} 
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