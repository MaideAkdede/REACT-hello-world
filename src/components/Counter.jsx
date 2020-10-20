import React, { Component } from 'react'
import ChildCounter from "./ChildCounter";

export default class Counter extends Component {
    state = {
        counters: [
            { id: 1, value: 0 } ,
            { id: 2, value: 0 } ,
            { id: 3, value: 0 } ,
            { id: 4, value: 0 } ,
        ]
    };
    augmenter = counter => {

        const counters = [...this.state.counters];

        const index = counters.indexOf(counter);

        counters[index] = {...counter };

        counters[index].value++;

        this.setState({ counters});
    };

    diminuer = counter => {
        const counters = [...this.state.counters];

        const index = counters.indexOf(counter);

        counters[index] = {...counter };

        if(counters[index].value >= 0){
            counters[index].value = 0
        } else {
            counters[index].value--;
        }

        this.setState({ counters});
    };

    render() {
        return this.state.counters.map(counter => (
            <React.Fragment>
                <ChildCounter
                    counter={counter}
                    key={counter.id}
                    value={counter.value}
                    aug={this.augmenter}
                    dim={this.diminuer}
                >
                </ChildCounter>
            </React.Fragment>
        ));
    }

}