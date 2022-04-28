import { useState } from 'react';

const NameForm = () => {
    const [fullName, setFullName] = useState('');

    const handleOnChange = (ev) => {
        setFullName(ev.target.value);
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev.target);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Fullname: <input type="text" placholder="Type your full name here" value={fullName} onChange={handleOnChange} />
            </label>
            <input type="submit" value="Sumbit" />
        </form>
    )
};

export default NameForm;