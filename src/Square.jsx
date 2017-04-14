import React, { Component, PropTypes } from 'react';


class Square extends Component {
    render() {
        console.log('rerendering');
        const { square, handleLeftClick } = this.props;
        return (
            <button onClick={handleLeftClick} id={square.position} className="square">
                { square.isOpen ? (
                    <div className="square-inner">{square.face}</div> 
                ) : (
                    <div className="square-inner">CLOSED</div>
                )
                }
            </button>
        );
    }
}

Square.propTypes = {
    square: PropTypes.object,
    handleLeftClick: PropTypes.func
};

export default Square;