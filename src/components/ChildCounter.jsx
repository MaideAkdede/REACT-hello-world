import React, { Component } from "react";
import Counter from "./Counter";

export default class ChildCounter extends Component {
    render() {
        return(
                <p>
                    <span>Compteur {this.props.key} :</span>

                    <button onClick={ () => this.props.dim(this.props.counter)}>
                        -
                    </button>

                    <span>{this.props.value}</span>
                    <button onClick={ () => this.props.aug(this.props.counter)}>
                        +
                    </button>
                </p>
        )
    }
}