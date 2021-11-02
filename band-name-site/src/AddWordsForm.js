import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './AddWordsForm.css';

export default function AddWordsForm(props) {
    const validateWordInput = () => {
        let errorMessage = props.word ? "" : "this field is required";
    }

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
                value={props.word}
                onChange={props.onWordChange}
                disabled={props.submitting}
                error={props.wordFieldError}
                helperText={props.wordFieldHelperText}
            />            
            </div>
            <FormControlLabel 
                disabled={props.submitting} 
                id="first-checkbox" 
                control={
                    <Checkbox 
                        checked={props.first}
                        onChange={props.onFirstchange} 
                    />
                } 
                label="Can be first" 
            />
            <FormControlLabel 
                disabled={props.submitting} 
                id="second-checkbox" 
                control={
                    <Checkbox 
                        checked={props.second}
                        onChange={props.onSecondChange} 
                    />
                } 
                label="Can be second" 
            />
            <LoadingButton
                color="primary"
                onClick={props.onSubmit}
                loading={props.submitting}
                loadingPosition="start"
                startIcon={<AddIcon />}
                variant="contained"
            >
                Add
            </LoadingButton>            
        </Box>
    );
}