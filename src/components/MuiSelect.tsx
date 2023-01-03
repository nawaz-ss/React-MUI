import React, { FC, useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

interface IProps {}

/**
* @author
* @function @MuiSelect
**/

export const MuiSelect:FC<IProps> = (props) => {
    const [country, setCountry] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        //console.log('select value', value);
        //console.log('select value type',typeof value);
        setCountry(typeof value === 'string' ? value.split(',') : value);
    }
    return(
        <Box width='250px'>
            <TextField
                label='Select Country'
                select
                value={country}
                onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true,
                }}
                size='medium'
                color='secondary'
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}
