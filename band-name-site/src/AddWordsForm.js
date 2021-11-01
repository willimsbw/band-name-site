import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import './AddWordsForm.css';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

class AddWordsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            submitting: false,
            word: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
        
    handleClick(e) {
        e.preventDefault();
        this.setState({submitting: true}, () => {
            sleep(3000).then(() => { 
                this.setState({submitting: false}); 
                this.setState({word: ""});
            });    
        });
    }

    handleChange(e) {
        this.setState({word: e.target.value});
    }

    render() { 
      return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className="form-surround"
        >
            <div>
            <TextField
                required
                id="outlined-required"
                label="Add a word"
                value={this.state.word}
                onChange={this.handleChange}
                disabled={this.state.submitting}
            />
            </div>
            <LoadingButton
                color="primary"
                onClick={this.handleClick}
                loading={this.state.submitting}
                loadingPosition="start"
                startIcon={<AddIcon />}
                variant="contained"
            >
                Add
            </LoadingButton>
        </Box>
      );
    }
}
 
export default AddWordsForm;