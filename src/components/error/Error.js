import React from 'react';
import PropTypes from 'prop-types';


import './error.css';

const Error = ({ message }) => {
    return (
        <div className='text'>
            {message}
        </div>
    )

};

Error.propTypes = {
    message: PropTypes.string
}

Error.defaultProps = {
    message: 'An error accurred'
};

export default Error;