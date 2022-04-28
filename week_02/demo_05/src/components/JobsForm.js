import { useState } from 'react';

const jobs = [
    'full-stack developer',
    'software engineer',
    'freelance .Net developer',
    'projectmanager',
    'freelance c++',
];

const frameworks = [
    'React',
    'Angular',
    'Vue',
    'TypeScript',
    'Ember',
];

const JobsForm = () => {
    const [job, setJob] = useState(jobs[0]);
    const [selectedFrameworks, setSelectedFrameworks] = useState([frameworks[0]]);
    const [files, setFiles] = useState([]);

    const handleOnChange = (ev) => {
        setJob(ev.target.value);
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev.target);
    };

    const handleFrameworksOnChange = (ev) => {
        const values = [...ev.target.selectedOptions].map(opt => opt.value);
        setSelectedFrameworks(values);
    };

    const handleFilesOnChange = (ev) => {
        setFiles(prevState => {
            return [
                ...prevState,
                Array.prototype.slice.call(ev.target.files),
            ];
        });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Select the job you prefer: 
                <select value={job} onChange={handleOnChange}>
                    {jobs && jobs.map((job, index) => <option key={index} value={job}>{job}</option>)}
                </select>
            </label>
            <label>
                Select the frameworks you prefer: 
                <select multiple={true} value={selectedFrameworks} onChange={handleFrameworksOnChange}>
                    {frameworks && frameworks.map((framework, index) => <option key={index} value={framework}>{framework}</option>)}
                </select>
            </label>
            <label>
                Attach files:
                <input type="file" multiple={true} onChange={handleFilesOnChange} />
            </label>
            <input type="submit" value="Sumbit" />
        </form>
    )
};

export default JobsForm;