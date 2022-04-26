const LED = ({isOn}) => {
    return <div className={`led${isOn ? ' led--ison' : ''}`}>LED</div>
};

export default LED;