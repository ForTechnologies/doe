import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Select(props) {

    const style = {
        height: '55px',
        width: '300px',
        border: '2',
        padding: 5,
        marginTop: 5,
        marginBottom: 20,

        border: '1px solid #8692A6',
        boxSizing: 'border-box',
        borderRadius: '15px',

        fontFamily: 'Inter',
        fontSize: '14px',
        lineHeight: '19px',
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <div>
            <Typography variant='body' sx={{ color: 'grey' }}>{props.label}</Typography>
            <select name={props.name} placeholder={props.placeholder} style={style}>
                {props.options.map((item) => 
                    <option key={item.index} value={item.value}>{item.label}</option>
                    )} 
            </select>
        </div>
    )


    
}

