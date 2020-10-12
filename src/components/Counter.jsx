import React, { Component } from 'react'
import ChildCounter from "./ChildCounter";

export default class Counter extends Component {
    state = {
        count:0
    };

    augmenter = () => {
        this.setState({count: this.state.count + 1});
    }
    diminuer = () => {
        if (this.state.count <= 0 ){
            this.state.count = 0;
        } else {
            this.setState({count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Compteur</h1>
                <ChildCounter
                    valeur={this.state.count}
                    aug={this.augmenter}
                    dim={this.diminuer}
                >
                </ChildCounter>
            </React.Fragment>

        )
    }

}