import React, { Component } from 'react';
import Square from './Square';

const target = {
    a1: 1,
    a2: 2,
    a3: 3,
    b1: 1,
    b2: 2,
    b3: 3,
    c1: 1,
    c2: 2,
    c3: 3
};

class BoardRow extends Component {
    render() {
        const row = this.props.row
        return (
            <div className="board-square">
                {
                    row.map((elem, index) => {
                        return (
                            <div className="board-square">
                                <Square  position={elem}/>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}


const keys = Object.keys(target);

const size = Math.sqrt(keys.length);
console.log(size);

class Board extends Component {
    render() {;
        return (
            <div >{
                keys.map((i, index) => {
                    console.log(index % size );
                    return (
                    <div >
                        {
                            (index % size === 0) && 
                                <BoardRow row={keys.slice(index, index + size)}/>
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