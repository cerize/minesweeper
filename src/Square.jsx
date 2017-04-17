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
        console.log('input user', this.userAnswer.value);
        console.log('real answer', this.props.square.answer);
        e.preventDefault();
        if (userAnswer === this.props.square.answer) {
            console.log('rightAnswer!');
            this.props.square.status = 'open';
            return;
        }
        console.log('wrong answer');
    }
    
    render() {
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
                        isOpen={status === 'question'}
                        onRequestClose={this._onCloseModal}
                        contentLabel={question}
                        >

                        <h2>Hello</h2>
                        <button onClick={this._onCloseModal}>close</button>
                        <div>{question}</div>
                        <form onSubmit={this._onSubmitAnswer}>
                            <input name="answer" ref={(input) => { this.userAnswer = input; }} />
                            <input type="submit" value="Submit" />
                        </form>
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