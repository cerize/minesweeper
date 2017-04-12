import React, { Component } from 'react';


class Square extends Component {
    render() {
        const { board, position } = this.props;
        return (
            <div className="square">
                {board[position].hasBomb ?
                    <div className="square-inner">BOMB!</div> :
                    <div className="square-inner">{board[position].bombsNear}</div> 
                }
            </div>
        );
    }
}

export default Square;