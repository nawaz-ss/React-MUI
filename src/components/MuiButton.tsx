import React, { FC, useState } from 'react';
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

interface IProps {}

/**
* @author
* @function @MuiButton
**/

export const MuiButton:FC<IProps> = (props) => {
    const [formats, setFormats] = useState<string[]>([])
    //console.log('formats::',formats)
    const handleFormatsChange = ( _event: React.MouseEvent<HTMLElement>,updatedFormats:string[]) => {
        //console.log('updatedFormats ::', updatedFormats);
        setFormats(updatedFormats);
    }
    return (
        <Stack spacing={4}>

            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com' target='_blank'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <IconButton aria-label='send' color='success' size='small'><SendIcon /></IconButton>
                <IconButton aria-label='send' color='success' size='medium'><SendIcon /></IconButton>
                <IconButton aria-label='send' color='success' size='large'><SendIcon /></IconButton>
            </Stack>

            <Stack display='block' direction='row'>
                <ButtonGroup variant='contained' orientation='horizontal' color='primary' aria-label='button-group'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup
                    aria-label='text-formatting' value={formats}
                    onChange={handleFormatsChange} color='success'
                    size='large' orientation='horizontal'
                    exclusive //this allows us to select only one button
                >
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
