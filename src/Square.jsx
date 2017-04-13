import React, { Component } from 'react';


class Square extends Component {
    render() {
        const { board, position } = this.props;
        return (
            <div onClick={this.props.onClick.bind(this)} id={position} className="square">
                { board[position].isOpen ? (
                    board[position].hasBomb ?
                        <div className="square-inner">BOMB!</div> :
                        <div className="square-inner">{board[position].bombsNear}</div> 

                ) : 
                    <div className="square-inner">CLOSED</div>
                }
            </div>
        );
    }
}

export default Square;