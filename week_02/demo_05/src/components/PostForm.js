import { useState } from 'react';

const categories = [
    'full-stack developer',
    'software engineer',
    'freelance .Net developer',
    'projectmanager',
    'freelance c++',
];

const PostForm = () => {
    const [formData, setFormData] = useState({
        'title': '',
        'synopsis': '',
        'category': categories[0],
        'publish': false,
    });

    const handleOnChange = (ev) => {
        setFormData({
            ...formData,
            [ev.target.name]: (ev.target.type !== 'checkbox') ? ev.target.value : ev.target.checked
        })
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev.target);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Title: <input name="title" type="text" placholder="Type your full name here" value={formData.title} onChange={handleOnChange} />
            </label>
            <label>
                Synopsis: <textarea name="synopsis" placholder="Type your essay here" value={formData.synopsis} onChange={handleOnChange} />
            </label>
            <label>
                Category: 
                <select name="category" value={formData.category} onChange={handleOnChange}>
                    {categories && categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>
            </label>
            <label>
                Publish: <input name="publish" type="checkbox" placholder="Type your essay here" checked={formData.publish} onChange={handleOnChange} />
            </label>
            <input type="submit" value="Sumbit" />
        </form>
    )
};

export default PostForm;