import { useCallback, useEffect, useRef, useState } from 'react';

const ClockPerformance = ({utc}) => {
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
        <div className="digital-clock">
            {date.toLocaleTimeString()}
            {date.getMilliseconds()}
        </div>
    );
}

export default ClockPerformance;