import { useCallback, useEffect, useState } from 'react';

const ThemeMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [degrees, setDegrees] = useState(0);

    const toggleTheme = (ev) => {
        setIsDarkMode(!isDarkMode);

        // document.body.style.backgroundColor = (isDarkMode) ? '#000000' : '#ffffff';
        document.body.classList.toggle('is-darkmode');
    };

    const handleDegrees = (ev) => {
        setDegrees(degrees + 6);
    };

    const linkHandler = (ev) => {
        ev.preventDefault();
        console.log('Do some magic with link');
    };

    const linkHandlerAsCallback = useCallback((ev) => {
        ev.preventDefault();
        console.log('Do some magic with link');
    }, []);

    useEffect(() => {
        document.body.style.transform = `rotate(${degrees}deg)`;
    }, [degrees])
    

    return (
        <>
            <button onClick={(ev) => toggleTheme(ev)}>Toggle</button>
            <a href="http://www.pgm.gent" title="A Link" onClick={(ev) => linkHandlerAsCallback(ev)}>Press Me</a>
            <button onClick={(ev) => handleDegrees(ev)}>Degrees</button>
        </>
    );
};

export default ThemeMode;