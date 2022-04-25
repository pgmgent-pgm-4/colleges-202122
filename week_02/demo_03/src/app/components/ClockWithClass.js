import React from 'react';

class ClockWithClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    tick() {
        const date = new Date();
        date.setUTCHours(date.getUTCHours() + (this.props.utc ?this.props.utc : 0))
        this.setState({
            date: date
        });
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="digital-clock">
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default ClockWithClass;