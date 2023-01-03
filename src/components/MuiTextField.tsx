import React, { FC } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';

interface IProps {}

/**
* @author
* @function @MuiTextField
**/

export const MuiTextField:FC<IProps> = (props) => {
    return(
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label="Name" variant='outlined' />
                <TextField label="Email" variant='filled' />
                <TextField label="Mobile" variant='standard' />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label="Name" variant='outlined' size='small' color='primary' />
                <TextField label="Name" variant='outlined' size='medium' color='secondary' />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label="Name" color='primary' required />
                <TextField label="Password" type='password' size='medium' color='secondary' helperText='Do not share your password with others' required />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField 
                    label="Amount" 
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                    helperText='Amount in dollars'
                />
                <TextField 
                    label="Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>KG</InputAdornment>,
                    }}
                    helperText='Weight in KG'
                />
                <TextField 
                    label="Password"
                    type='password'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><PasswordIcon /></InputAdornment>,
                    }}
                    helperText='Do not share your password with others'
                />
            </Stack>
        </Stack>
    )
}
