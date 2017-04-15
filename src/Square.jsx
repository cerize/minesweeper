import React, { Component, PropTypes } from 'react';


class Square extends Component {
    _onRightClick = (e) => {
        e.preventDefault();
        if (this.props.square.status === 'open') {
            return;
        }
        this.props.square.status = this.props.square.status === 'closed' ? 'flag' : 'closed';
    };
    
    render() {
        console.log('rerendering square');
        const { square } = this.props;
        return (
            <button onClick={() => { square.status = 'open'; }} onContextMenu={this._onRightClick} id={square.position} className="square">
                { square.status === 'open' ? (
                    <div className="square-inner">{square.face}</div> 
                ) : square.status === 'closed' ? (
                    <div className="square-inner">CLOSED</div>
                ) : (
                    <div className="square-inner">FLAG</div>
                )
                }
            </button>
        );
    }
}

Square.propTypes = {
    square: PropTypes.object,
};

export default Square;