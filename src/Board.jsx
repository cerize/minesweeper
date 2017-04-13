import React, { Component } from 'react';
import Square from './Square';
import getInitialBoard from './getInitialBoard';


class BoardRow extends Component {
    render() {
        const row = this.props.row
        return (
            <div className="board-square">
                {
                    row.map((elem, index) => {
                        return (
                            <div className="board-square">
                                <Square key={index} board={this.props.board} onClick={this.props.onClick} position={elem}/>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}



class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'initial'
        };
    }

    componentWillMount() {
        this.board = getInitialBoard();
        const handler = {
            get: (obj, prop) => {
                return obj[prop];
            },
            set: function(obj, prop, value) {
                this.handleOpen(obj, prop, value);
            }
        };
        this.proxyBoard = new Proxy(this.board, handler);
    }

    onClick = (e) => {
        console.log('event', e.target);
        console.log('this', this);
        console.log('square clicked!');
    }

    handleOpen() {

    }

    render() {;
        const keys = Object.keys(this.board);
        const size = Math.sqrt(keys.length);

        return (
            <div >{
                keys.map((i, index) => {
                    console.log(index % size );
                    return (
                    <div >
                        {
                            (index % size === 0) && 
                                <BoardRow key={index} board={this.proxyBoard} onClick={this.onClick} row={keys.slice(index, index + size)}/>
                        }
                    </div>

                    )
                })
            }
            </div>
        )
    }
}

export default Board;