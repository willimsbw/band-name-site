import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function NameDisplayOptions(props) {
    
    return (
        <List>
            {props.listOptions.map((value) => {
                return (
                    <ListItem 
                        key={value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={() => props.onClick(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={props.checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                />  
                            </ListItemIcon>
                            <ListItemText id={value} primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}