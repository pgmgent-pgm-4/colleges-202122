import { useEffect, useState } from 'react';

const ThemeToggle = ({ onThemeChanged, isDarkmode }) => {
    const [isToggled, setIsToggled] = useState(isDarkmode);

    const handleOnChange = (ev) => {
        setIsToggled(ev.target.checked);
    };

    useEffect(() => {
        if (typeof onThemeChanged === 'function') {
            onThemeChanged(isToggled);
        }
    }, [isToggled]);

    useEffect(() => {
        setIsToggled(isDarkmode);
    }, [isDarkmode]);

    return (
        <input type="checkbox" onChange={handleOnChange} checked={isToggled} />
    );
};

export default ThemeToggle;