import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
// import QuestionModal from './QuestionModal';

class Square extends Component {
    _onRightClick = (e) => {
        e.preventDefault();
        if (this.props.square.status === 'open') {
            return;
        }
        this.props.square.status = this.props.square.status === 'closed' ? 'flag' : 'closed';
    };

    _onLeftClick = (e) => {
        // this.props.square.status = 'question';
        this.props.square.status = 'open'; 
    }
    
    render() {
        console.log('rerendering square');
        const { square } = this.props;
        return (
            <button onClick={this._onLeftClick} onContextMenu={this._onRightClick} id={square.position} className={square.status === 'closed' ? 'square closed' : 'square'}>
                { square.status === 'open' ? (
                    <div className="square-inner">{square.face === 'bomb' ? <i className="fa fa-bomb" /> : square.face}</div> 
                ) : square.status === 'closed' ? (
                    <div className="square-inner">&nbsp;</div>
                ) : (
                    <div className="square-inner"><i className="fa fa-flag" /></div>
                )
                }
                {
                    /*<Modal
                        isOpen={square.status === 'question'}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                        >

                        <h2 ref="subtitle">Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                        </form>
                    </Modal>*/
                }
            </button>
        );
    }
}

Square.propTypes = {
    square: PropTypes.object,
};

export default Square;