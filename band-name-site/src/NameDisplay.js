import React from 'react';
import PropTypes from 'prop-types';

class NameDisplay extends React.Component {
    render() { 
        return (
            <p>{this.props.name}</p>
        );
    }
}

NameDisplay.propTypes = {
    name: PropTypes.string
}
 
export default NameDisplay;