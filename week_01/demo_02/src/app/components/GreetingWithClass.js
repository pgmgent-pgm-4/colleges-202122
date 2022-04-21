import React from 'react';

class GreetingWithClass extends React.Component {
    render() {
        return (
            <blockquote>{this.props.message}</blockquote>
        )
    };
};

export default GreetingWithClass;