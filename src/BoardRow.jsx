import React, { PropTypes } from 'react';
import Square from './Square';


const BoardRow = ({ row, board, mode, handleClick }) => {
    console.log('inside board, mode', mode);
    const squareHandler = {
        set: (obj, prop, value) => {
            obj[prop] = value;
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
                            <Square 
                                key={index} 
                                square={proxySquare} 
                                mode={mode}
                            />
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
    mode: PropTypes.string,
    handleClick: PropTypes.func
};

export default BoardRow;