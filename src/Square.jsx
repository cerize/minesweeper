import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

class Square extends Component {
    _onRightClick = (e) => {
        e.preventDefault();
        if (this.props.square.status === 'open') {
            return;
        }
        this.props.square.status = this.props.square.status === 'closed' ? 'flag' : 'closed';
    };

    _onLeftClick = () => {
        // Triggers opening the question modal
        if (this.props.mode === 'dev') {
            this.props.square.status = 'question';
            return;
        }
        this.props.square.status = 'open'; 
    }

    _onCloseModal = () => {
        console.log('modal closed');
        this.props.square.status = 'quitQuestion';
    }

    _onSubmitAnswer = (e) => {
        const userAnswer = this.userAnswer.value;
        e.preventDefault();
        if (userAnswer === this.props.square.answer) {
            this.props.square.status = 'open';
            return;
        }
        this.props.square.status = 'wrongAnswer';
    }
    
    render() {
        const customStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        const { square, mode } = this.props;
        const { status, position, face, question } = square;
        console.log('rerendering square, mode:', mode);
        return (
            <button onClick={this._onLeftClick} onContextMenu={this._onRightClick} id={position} className={(status === 'closed' || status === 'quitQuestion') ? 'square closed' : 'square'}>
                { status === 'open' ? (
                    <div className="square-inner">{face === 'bomb' ? <i className="fa fa-bomb" /> : face}</div> 
                ) : status === 'flag' ? (
                    <div className="square-inner"><i className="fa fa-flag" /></div>
                ) : (
                    <div className="square-inner">&nbsp;</div>
                )
                }
                {
                    (mode === 'dev') &&
                    <Modal
                        isOpen={status === 'question' || status === 'wrong-answer'}
                        onRequestClose={this._onCloseModal}
                        contentLabel={question}
                        style={customStyle}
                    >
                        <div className="modal">
                            <h2>Dev Challenge</h2>
                            <div>{question}</div>
                            <form onSubmit={this._onSubmitAnswer}>
                                <input name="answer" ref={(input) => { this.userAnswer = input; }} />
                                <div className="modal-buttons">
                                    <button onClick={this._onCloseModal}>Cancel</button>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                            {
                                status === 'wrongAnswer' &&
                                <div className="wrong-answer">
                                    Incorret Answer
                                </div>
                            }
                        </div>
                    </Modal>
                }
            </button>
        );
    }
}

Square.propTypes = {
    square: PropTypes.object,
    mode: PropTypes.string,
};

export default Square;