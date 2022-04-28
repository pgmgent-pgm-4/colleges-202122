import { useEffect, useState } from 'react';

const Dimmer = ({val}) => {
    const [v, setV] = useState(0);

    const handleOnChange = (ev) => {
        setV(ev.target.value);
    };

    useEffect(() => {
        if (typeof val === 'function') {
            val(v);
        }
    }, [v])
    

    return (
        <div className="dimmer">
            <input name="v" type="range" min="0" max="255" value={v} onChange={handleOnChange}/>
        </div>
    );
};

export default Dimmer;