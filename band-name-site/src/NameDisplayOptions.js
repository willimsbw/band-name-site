import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

export default function NameDisplayOptions(props) {
    
    return (
        <TextField
          id="number-of-words"
          label="Number of words"
          type="number"
          defaultValue={props.default}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={props.onChange}
        />
    );
}