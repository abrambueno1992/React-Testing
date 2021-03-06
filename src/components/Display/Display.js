import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    console.log('this.props for Display.js', value);
    // console.log('typeof value: ', typeof value)
    return (
        <div className="component-display">
            <div>
                {value}
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;