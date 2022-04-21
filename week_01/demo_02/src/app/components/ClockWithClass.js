import React from 'react';

class ClockWithClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="">
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
};

export default ClockWithClass;