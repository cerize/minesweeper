import React, { PropTypes } from 'react';
import Square from './Square';


const BoardRow = ({ row, board, handleLeftClick }) => {
    const squareHandler = {
        set: (obj, prop, value) => {
            obj[prop] = value;
            console.log('inside set from squareHandler', obj);
            
            console.log('board in borad row', board);
            handleLeftClick(obj);
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
    handleLeftClick: PropTypes.func
};

export default BoardRow;