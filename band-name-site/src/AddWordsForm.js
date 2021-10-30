import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

class AddWordsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            submitting: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }
        
    handleClick() {
        this.setState({submitting: true}, () => {
            sleep(3000).then(() => { this.setState({submitting: false}); });
        });
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
        >
            <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Add a word"
            />
            </div>
            <LoadingButton
                color="primary"
                onClick={this.handleClick}
                loading={this.state.submitting}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                Save
            </LoadingButton>
        </Box>
      );
    }
}
 
export default AddWordsForm;