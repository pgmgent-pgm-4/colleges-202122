import { useEffect, useState } from 'react';

import LED from "./LED";

const LEDStrip = ({v = 0, amount = 1}) => {
    const [binaryValue, setBinaryValue] = useState(null);

    const leds = [];
    for (let i = 0; i < amount; i++) {
        leds.push(<LED key={i} isOn={binaryValue !== null ? (binaryValue[i] === '1' ? true : false) : false}/>);
    }

    useEffect(() => {
      let bStr = Number(v).toString(2);
      while (bStr.length < amount) {
          bStr = `0${bStr}`
      }
      setBinaryValue(bStr);
    }, [v])
    

    return (
        <div className={`ledstrip`}>
            {leds}
        </div>
    );
};

export default LEDStrip;