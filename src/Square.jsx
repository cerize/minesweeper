import React, { PropTypes } from 'react';


const Square = ({ square }) => {
    console.log('rerendering square');
    return (
        <button onClick={() => { square.isOpen = true; }} id={square.position} className="square">
            { square.isOpen ? (
                <div className="square-inner">{square.face}</div> 
            ) : (
                <div className="square-inner">CLOSED</div>
            )
            }
        </button>
    );
};

Square.propTypes = {
    square: PropTypes.object,
};

export default Square;