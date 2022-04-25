import { useState } from 'react';

const ThemeMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        document.body.style.backgroundColor = (isDarkMode) ? '#000000' : '#ffffff';
    };

    return (
        <button onClick={() => toggleTheme()}>Toggle</button>
    );
};

export default ThemeMode;