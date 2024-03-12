import PropTypes from 'prop-types';
import '../App.css';

const BoxContainer = ({ data }) => {
    return (
        <div className="box-container">
            {data.map((box, i) => (
                <div className='box' key={i} style={{background:box.color, height: `${box.height}px`, width: `${box.width}px`}}></div>
            ))}
        </div>
    );
};

BoxContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default BoxContainer;
