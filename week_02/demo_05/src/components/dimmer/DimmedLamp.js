import './DimmedLamp.css';

const DimmedLamp = ({lampColor}) => {
    return (
        <div className="dimmedlamp" style={{backgroundColor: lampColor}}>
        </div>
    );
};

export default DimmedLamp;