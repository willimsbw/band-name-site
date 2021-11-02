import React from 'react';
import NameDisplay from './NameDisplay';
import NameDisplayOptions from './NameDisplayOptions';
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

class NameDisplayObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            numberOfWords: 2,
            loading: false
         }
        this.renderName = this.renderName.bind(this);
        this.setNumberOfWords = this.setNumberOfWords.bind(this);
    }

    async renderName() {
        try {
            this.setState({loading: true});
            const result = await axios.post("http://0.0.0.0:5000/makeName", {"numberOfWords": this.state.numberOfWords});
            this.setState({name: result.data.bandName, loading: false});
        } catch (error) {
            console.error(error);
            this.setState({loading: false});
        }
    }

    setNumberOfWords(e) {
        this.setState({numberOfWords: parseInt(e.target.value)})
    }

    render() { 
        return (  
            <div className="nameDisplayObject">
                <NameDisplayOptions onChange={this.setNumberOfWords} default={this.state.numberOfWords}/>
                <NameDisplay name={this.state.name} className="band-name" />
                <LoadingButton
                    color="secondary"
                    onClick={this.renderName}
                    loading={this.state.loading}
                    loadingPosition="start"
                    startIcon={<MusicNoteIcon />}
                    variant="contained"
                >
                    Get a name!
                </LoadingButton>
            </div>
        );
    };
}
 
export default NameDisplayObject;