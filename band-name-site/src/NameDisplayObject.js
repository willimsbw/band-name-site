import React from 'react';
import NameDisplay from './NameDisplay';
import NameDisplayOptions from './NameDisplayOptions';
import Button from './Button';

class NameDisplayObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            checked: []
         }
        this.renderName = this.renderName.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    renderName() {
        this.setState({name: "test"});
    }

    handleToggle(value) {
        console.log("Trying to toggle " + value.toString);
        // Get the index of the item in the array of checked stuff
        const currentIndex = this.state.checked.indexOf(value);
        // Copy existing list of checked stuff
        const newChecked = [...this.state.checked];
    
        // If item is not already in list
        if (currentIndex === -1) {
            // It got checked -- add it to the list
            newChecked.push(value);
        } else {
            // It was unchecked -- remove it from the list
            newChecked.splice(currentIndex, 1);
        }
    
        // Set the checked list to our modified list
        this.setState({checked: newChecked});
    };

    render() { 
        return (  
            <div className="nameDisplayObject">
                <NameDisplayOptions onClick={this.handleToggle} checked={this.state.checked} listOptions={["indie", "metal", "garage"]} />
                <NameDisplay name={this.state.name} className="band-name" />
                <Button onClick={this.renderName} text="Get a name!" className="submit-button" />
            </div>
        );
    };
}
 
export default NameDisplayObject;