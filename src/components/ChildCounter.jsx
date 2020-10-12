import React, { Component } from "react";

export default class ChildCounter extends Component {
    render() {
        return(
            <p>
                <button onClick={this.props.dim}>-</button>
                <span>{this.props.valeur}</span>
                <button onClick={this.props.aug}>+</button>
            </p>
        )
    }
}