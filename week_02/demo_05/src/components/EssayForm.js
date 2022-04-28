import { useState } from 'react';

const EssayForm = () => {
    const [essay, setEssay] = useState('');

    const handleOnChange = (ev) => {
        setEssay(ev.target.value);
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev.target);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Essay: <textarea placholder="Type your essay here" value={essay} onChange={handleOnChange} />
            </label>
            <input type="submit" value="Sumbit" />
        </form>
    )
};

export default EssayForm;