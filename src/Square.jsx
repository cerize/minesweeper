import React, { Component } from 'react';


class Square extends Component {
    render() {
        return (
            <div className='square'>{this.props.position}</div>
        )
    }
}

export default Square;