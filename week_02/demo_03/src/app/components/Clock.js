import { useEffect, useState } from 'react';

const Clock = ({utc}) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => tick(), 5);
        return () => {
            clearInterval(timerId);
        } 
    }, [utc]);

    const tick = () => {
        const date = new Date();
        date.setUTCHours(date.getUTCHours() + (utc ? utc : 0))
        setDate(date);
    }

    return (
        <div className="digital-clock">
            {date.toLocaleTimeString()}
            {date.getMilliseconds()}
        </div>
    );
}

export default Clock;