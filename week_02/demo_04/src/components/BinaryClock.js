import LEDStrip from "./LEDStrip";

import './BinaryClock.css'

const BinaryClock = () => {
    return (
        <div className={`binary-clock`}>
            <LEDStrip v={1} amount={2}/>
            <LEDStrip v={5} amount={4}/>
            <LEDStrip v={3} amount={3}/>
            <LEDStrip v={4} amount={4}/>
            <LEDStrip v={3} amount={3}/>
            <LEDStrip v={6} amount={4}/>
        </div>
    );
};

export default BinaryClock;