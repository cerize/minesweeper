import React, { PropTypes } from 'react';
import Square from './Square';


const BoardRow = ({ row, board, handleClick }) => {
    const squareHandler = {
        set: (obj, prop, value) => {
            obj[prop] = value;
            console.log('inside set from squareHandler', obj);
            
            handleClick(obj);
            return true;
        }
    };
    return (
        <div className="board-row">
            {
                row.map((elem, index) => {
                    const proxySquare = new Proxy(board.squares[elem], squareHandler);
                    return (
                        <div className="board-square">
                            <Square key={index} square={proxySquare} />
                        </div>
                    );
                })
            }
        </div>
    );  
};
     
   
BoardRow.propTypes = {
    row: PropTypes.array,
    board: PropTypes.object,
    handleClick: PropTypes.func
};

export default BoardRow;