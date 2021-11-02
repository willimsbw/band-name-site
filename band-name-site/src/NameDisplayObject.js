import React from 'react';
import NameDisplay from './NameDisplay';
import NameDisplayOptions from './NameDisplayOptions';
import Button from './Button';

class NameDisplayObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            numberOfWords: 2
         }
        this.renderName = this.renderName.bind(this);
        this.setNumberOfWords = this.setNumberOfWords.bind(this);
    }

    renderName() {
        this.setState({name: "test ".repeat(this.state.numberOfWords)});
    }

    setNumberOfWords(e) {
        this.setState({numberOfWords: e.target.value})
    }

    render() { 
        return (  
            <div className="nameDisplayObject">
                <NameDisplayOptions onChange={this.setNumberOfWords} default={this.state.numberOfWords}/>
                <NameDisplay name={this.state.name} className="band-name" />
                <Button onClick={this.renderName} text="Get a name!" className="submit-button" />
            </div>
        );
    };
}
 
export default NameDisplayObject;