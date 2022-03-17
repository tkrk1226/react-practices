import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

    // onClick={(e) => {
    //     this.setState({
    //         val: this.state.val + this.state.step
    //     })
    // }}

    onClickButtion(e) {
        this.setState({
            val : this.state.val + this.props.step
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButtion.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}