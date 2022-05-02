import { useCallback, useEffect, useRef, useState } from 'react';

import LEDStrip from "./LEDStrip";

import './BinaryClock.css'
import { dataTags } from '../data';

const BinaryClock = ({utc = 0}) => {
    const [date, setDate] = useState(new Date());
    const timer = useRef(null)

    useEffect(() => {
        startTimer();    
        return () => {
            stopTimer();
        }  
    }, [utc]);

    const startTimer = useCallback(() => {
        timer.current = setInterval(() => {
            const date = new Date();
            date.setUTCHours(date.getUTCHours() + (utc ? utc : 0))
            setDate(date);
        }, 5);
    }, []);

    const stopTimer = useCallback(() => {
        clearInterval(timer.current);
    }, []);

    return (
        <div className={`binary-clock`}>
            <LEDStrip v={date.toTimeString().split(':')[0].charAt(0)} amount={2}/>
            <LEDStrip v={date.toTimeString().split(':')[0].charAt(1)} amount={4}/>
            <LEDStrip v={date.toTimeString().split(':')[1].charAt(0)} amount={3}/>
            <LEDStrip v={date.toTimeString().split(':')[1].charAt(1)} amount={4}/>
            <LEDStrip v={date.toTimeString().split(':')[2].charAt(0)} amount={3}/>
            <LEDStrip v={date.toTimeString().split(':')[2].charAt(1)} amount={4}/>
        </div>
    );
};

export default BinaryClock;