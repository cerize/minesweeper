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
                                <Square  board={this.props.board} position={elem}/>
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
    }

    onClick() {

    }

    render() {;
        const keys = Object.keys(this.board);
        const size = Math.sqrt(keys.length);
        const handler = {
            get: (obj, prop) => {
                //TODO
            }
        };
        const proxyBoard = new Proxy(this.board, handler);
        return (
            <div >{
                keys.map((i, index) => {
                    console.log(index % size );
                    return (
                    <div >
                        {
                            (index % size === 0) && 
                                <BoardRow board={this.board} row={keys.slice(index, index + size)}/>
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