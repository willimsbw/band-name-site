import React from 'react';
import NameDisplay from './NameDisplay';
import Button from './Button';


class NameDisplayObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.renderName = this.renderName.bind(this);
    }
    
    renderName() {
        this.setState({name: "test"});
    }

    render() { 
        return (
            <div className="nameDisplayObject">
                <NameDisplay name={this.state.name} className="band-name" />
                <Button onClick={this.renderName} text="Get a name!" className="submit-button" />
            </div>
        );
    }
}
 
export default NameDisplayObject;